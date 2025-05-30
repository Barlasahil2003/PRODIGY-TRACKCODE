// Contact form submission with basic validation and feedback
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();

            // Simple validation
            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.style.color = 'red';
                return;
            }

            // Simulate successful submission (replace with AJAX for real use)
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';

            // Optionally, clear the form
            contactForm.reset();
        });
    }
});