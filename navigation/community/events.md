---
layout: page
title: Events
permalink: /community/events/
hide_title: true
---

<div class="ocs__container ocs-community-calendar" id="community-calendar">
	<header class="ocs-community-calendar__header">
		<span class="ocs__badge">My Good Brain · Community Calendar</span>
		<h1>Community Events</h1>
		<p class="ocs__description">Plan and keep track of upcoming community events.</p>
	</header>

	<section class="ocs__card" aria-label="Community events calendar">
		<div class="ocs-calendar-toolbar">
			<div class="ocs-calendar-toolbar__navigation">
				<button class="ocs__btn pill" type="button" id="calendar-previous" aria-label="Previous month">Previous</button>
				<button class="ocs__btn pill" type="button" id="calendar-today">Today</button>
				<button class="ocs__btn pill" type="button" id="calendar-next" aria-label="Next month">Next</button>
			</div>
			<h2 class="ocs-calendar-toolbar__month" id="calendar-month" aria-live="polite"></h2>
			<button class="ocs__btn accent fill" type="button" id="calendar-add-event">Add event</button>
		</div>

		<div class="ocs-calendar-weekdays" aria-hidden="true">
			<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
		</div>
		<div class="ocs-calendar-grid" id="calendar-grid" role="grid" aria-label="Events calendar"></div>
		<p class="ocs-calendar-note">Events are saved in this browser on this device.</p>
	</section>

	<section class="ocs__card ocs-calendar-upcoming" aria-labelledby="calendar-upcoming-title">
		<h2 class="ocs__section-title" id="calendar-upcoming-title">Upcoming events</h2>
		<ul class="ocs-calendar-upcoming__list" id="calendar-upcoming-list"></ul>
	</section>
</div>

<dialog class="ocs-calendar-dialog" id="calendar-event-dialog" aria-labelledby="calendar-dialog-title">
	<form class="ocs-calendar-dialog__form" id="calendar-event-form">
		<input type="hidden" id="calendar-event-id">
		<h2 id="calendar-dialog-title">Add an event</h2>
		<label for="calendar-event-title">Event title</label>
		<input id="calendar-event-title" name="title" type="text" maxlength="120" required>
		<div class="ocs-calendar-dialog__row">
			<div><label for="calendar-event-date">Date</label><input id="calendar-event-date" name="date" type="date" required></div>
			<div><label for="calendar-event-time">Time (optional)</label><input id="calendar-event-time" name="time" type="time"></div>
		</div>
		<label for="calendar-event-location">Location (optional)</label>
		<input id="calendar-event-location" name="location" type="text" maxlength="160">
		<label for="calendar-event-description">Description (optional)</label>
		<textarea id="calendar-event-description" name="description" rows="3" maxlength="1000"></textarea>
		<p class="ocs-calendar-dialog__error" id="calendar-event-error" role="alert" hidden></p>
		<div class="ocs-calendar-dialog__actions">
			<button class="ocs__btn pill" type="button" id="calendar-event-cancel">Cancel</button>
			<button class="ocs__btn alert-red" type="button" id="calendar-event-delete" hidden>Delete</button>
			<button class="ocs__btn accent fill" type="submit">Save event</button>
		</div>
	</form>
</dialog>

<script src="{{ '/assets/js/community-events-calendar.js' | relative_url }}" defer></script>
