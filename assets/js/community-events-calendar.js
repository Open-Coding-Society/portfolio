(() => {
  'use strict';

  const root = document.getElementById('community-calendar');
  if (!root) return;

  const storageKey = 'mgb-community-events-v1';
  const monthLabel = document.getElementById('calendar-month');
  const calendarGrid = document.getElementById('calendar-grid');
  const upcomingList = document.getElementById('calendar-upcoming-list');
  const dialog = document.getElementById('calendar-event-dialog');
  const form = document.getElementById('calendar-event-form');
  const eventId = document.getElementById('calendar-event-id');
  const titleInput = document.getElementById('calendar-event-title');
  const dateInput = document.getElementById('calendar-event-date');
  const timeInput = document.getElementById('calendar-event-time');
  const locationInput = document.getElementById('calendar-event-location');
  const descriptionInput = document.getElementById('calendar-event-description');
  const deleteButton = document.getElementById('calendar-event-delete');
  const errorMessage = document.getElementById('calendar-event-error');

  const today = new Date();
  let visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  let events = loadEvents();

  function loadEvents() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
      return Array.isArray(saved) ? saved.filter(event => event && event.id && event.title && event.date) : [];
    } catch (error) {
      console.warn('Could not load saved community events.', error);
      return [];
    }
  }

  function saveEvents() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(events));
      return true;
    } catch (error) {
      console.error('Could not save community events.', error);
      errorMessage.textContent = 'Could not save this event in your browser. Check available storage and try again.';
      errorMessage.hidden = false;
      return false;
    }
  }

  function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function parseDate(value) {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDate(date, options) {
    return new Intl.DateTimeFormat(undefined, options).format(date);
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function renderCalendar() {
    monthLabel.textContent = formatDate(visibleMonth, { month: 'long', year: 'numeric' });
    calendarGrid.setAttribute('aria-label', `${monthLabel.textContent} calendar`);
    calendarGrid.replaceChildren();

    const firstOfMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
    const mondayOffset = (firstOfMonth.getDay() + 6) % 7;
    const gridStart = new Date(firstOfMonth);
    gridStart.setDate(firstOfMonth.getDate() - mondayOffset);

    for (let index = 0; index < 42; index += 1) {
      const cellDate = new Date(gridStart);
      cellDate.setDate(gridStart.getDate() + index);
      const key = dateKey(cellDate);
      const dayEvents = events
        .filter(event => event.date === key)
        .sort((a, b) => (a.time || '').localeCompare(b.time || ''));
      const cell = createElement('div', 'ocs-calendar-day');
      cell.setAttribute('role', 'gridcell');
      if (cellDate.getMonth() !== visibleMonth.getMonth()) cell.classList.add('is-outside-month');
      if (key === dateKey(today)) cell.classList.add('is-today');

      const addDateButton = createElement('button', 'ocs-calendar-day__date', String(cellDate.getDate()));
      addDateButton.type = 'button';
      addDateButton.setAttribute('aria-label', `Add event on ${formatDate(cellDate, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`);
      addDateButton.addEventListener('click', () => openDialog(key));
      cell.append(addDateButton);

      const eventContainer = createElement('div', 'ocs-calendar-day__events');
      dayEvents.slice(0, 3).forEach(event => {
        const eventButton = createElement('button', 'ocs-calendar-event', `${event.time ? `${event.time} ` : ''}${event.title}`);
        eventButton.type = 'button';
        eventButton.title = 'Edit event';
        eventButton.addEventListener('click', () => openDialog(key, event));
        eventContainer.append(eventButton);
      });
      if (dayEvents.length > 3) {
        eventContainer.append(createElement('span', 'ocs-calendar-day__more', `+${dayEvents.length - 3} more`));
      }
      cell.append(eventContainer);
      calendarGrid.append(cell);
    }

    renderUpcomingEvents();
  }

  function renderUpcomingEvents() {
    upcomingList.replaceChildren();
    const todayKey = dateKey(today);
    const upcoming = events
      .filter(event => event.date >= todayKey)
      .sort((a, b) => `${a.date} ${a.time || ''}`.localeCompare(`${b.date} ${b.time || ''}`));

    if (upcoming.length === 0) {
      upcomingList.append(createElement('li', 'ocs-calendar-empty', 'No upcoming events yet. Select a date or use “Add event” to create one.'));
      return;
    }

    upcoming.forEach(event => {
      const item = createElement('li', 'ocs-calendar-upcoming__item');
      const dateText = formatDate(parseDate(event.date), { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
      item.append(createElement('time', 'ocs-calendar-upcoming__date', `${dateText}${event.time ? ` · ${event.time}` : ''}`));
      item.append(createElement('strong', 'ocs-calendar-upcoming__title', event.title));
      if (event.location) item.append(createElement('span', 'ocs-calendar-upcoming__location', event.location));
      if (event.description) item.append(createElement('p', 'ocs-calendar-upcoming__description', event.description));
      const editButton = createElement('button', 'ocs-calendar-upcoming__edit', 'Edit');
      editButton.type = 'button';
      editButton.addEventListener('click', () => openDialog(event.date, event));
      item.append(editButton);
      upcomingList.append(item);
    });
  }

  function openDialog(date, event) {
    form.reset();
    eventId.value = event?.id || '';
    titleInput.value = event?.title || '';
    dateInput.value = event?.date || date || dateKey(today);
    timeInput.value = event?.time || '';
    locationInput.value = event?.location || '';
    descriptionInput.value = event?.description || '';
    document.getElementById('calendar-dialog-title').textContent = event ? 'Edit event' : 'Add an event';
    deleteButton.hidden = !event;
    errorMessage.hidden = true;
    errorMessage.textContent = '';
    dialog.showModal();
    titleInput.focus();
  }

  document.getElementById('calendar-previous').addEventListener('click', () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  document.getElementById('calendar-next').addEventListener('click', () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  document.getElementById('calendar-today').addEventListener('click', () => {
    visibleMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    renderCalendar();
  });

  document.getElementById('calendar-add-event').addEventListener('click', () => openDialog(dateKey(today)));
  document.getElementById('calendar-event-cancel').addEventListener('click', () => dialog.close());

  form.addEventListener('submit', event => {
    event.preventDefault();
    errorMessage.hidden = true;
    const nextEvent = {
      id: eventId.value || (globalThis.crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
      title: titleInput.value.trim(),
      date: dateInput.value,
      time: timeInput.value,
      location: locationInput.value.trim(),
      description: descriptionInput.value.trim()
    };
    if (!nextEvent.title || !nextEvent.date) return;

    const existingIndex = events.findIndex(item => item.id === nextEvent.id);
    if (existingIndex >= 0) events[existingIndex] = nextEvent;
    else events.push(nextEvent);
    if (!saveEvents()) return;

    visibleMonth = new Date(parseDate(nextEvent.date).getFullYear(), parseDate(nextEvent.date).getMonth(), 1);
    renderCalendar();
    dialog.close();
  });

  deleteButton.addEventListener('click', () => {
    if (!eventId.value) return;
    events = events.filter(event => event.id !== eventId.value);
    if (!saveEvents()) return;
    renderCalendar();
    dialog.close();
  });

  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  renderCalendar();
})();
