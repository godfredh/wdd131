// Wait for the DOM to load before executing script
document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    const form = document.getElementById('contactForm');
    const feedbackMessage = document.getElementById('formFeedback');
    const submitButton = document.getElementById('submitBtn');

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validate fields
        if (name && email && message) {
            // Store form data in localStorage
            const formData = {
                name: name,
                email: email,
                message: message
            };

            localStorage.setItem('formData', JSON.stringify(formData));

            // Display feedback message
            feedbackMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            feedbackMessage.style.color = 'green';

            // Clear form fields
            form.reset();
        } else {
            feedbackMessage.textContent = 'Please fill in all fields.';
            feedbackMessage.style.color = 'red';
        }
    });

    // Function to retrieve and display saved data from localStorage
    function displaySavedData() {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            const data = JSON.parse(savedData);
            console.log(`Saved Name: ${data.name}`);
            console.log(`Saved Email: ${data.email}`);
            console.log(`Saved Message: ${data.message}`);
        }
    }

    // Display saved data when the page loads
    displaySavedData();
});