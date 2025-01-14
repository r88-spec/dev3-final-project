document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (for demonstration)
    if(name && email && message) {
        // In a real scenario, here you would send the form data to a server
        alert('Thank you for your message!');
    } else {
        alert('Please fill in all the fields.');
    }
});

