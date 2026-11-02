const FEELING_REFLECTIONS = {
    'Mostly okay': 'It sounds like things feel mostly okay right now.',
    'A little stressed': 'It is understandable to feel stressed sometimes.',
    'Low or tired': 'It is okay to take things gently when you feel low or tired.',
    'Not sure yet': 'It is okay not to have a clear answer yet.',
};

export function initWellbeingCheckin({ form, result }) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        const answers = new FormData(form);
        const feeling = answers.get('feeling');
        const reset = answers.get('reset');
        const more = answers.get('more');

        result.textContent = `${FEELING_REFLECTIONS[feeling]} You chose ${reset.toLowerCase()} to help reset and would like a little more ${more.toLowerCase()} today. Consider taking one small step, and reach out to someone you trust if you would like support.`;
    });

    form.addEventListener('reset', () => {
        result.textContent = '';
    });
}
