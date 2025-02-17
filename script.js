// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to your backend
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Message sent successfully!');
});