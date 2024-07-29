document.addEventListener('DOMContentLoaded', () => {
    const feedbackButton = document.getElementById('feedback-btn');
    const feedbackResponse = document.getElementById('feedback-response');

    feedbackButton.addEventListener('click', () => {
        feedbackResponse.textContent = 'Obrigado pelo seu feedback!';
        feedbackResponse.style.color = 'green';
    });
});
