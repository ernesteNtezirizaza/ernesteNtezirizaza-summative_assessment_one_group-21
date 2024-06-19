document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Please enter a valid name.';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Phone number validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (format: (123) 456-7890).';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Event date validation
    const eventDate = document.getElementById('eventDate').value;
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
    if (!dateRegex.test(eventDate)) {
        isValid = false;
        document.getElementById('dateError').textContent = 'Please enter a valid date (format: MM/DD/YYYY).';
    } else {
        document.getElementById('dateError').textContent = '';
    }

    // Number of tickets validation
    const tickets = document.getElementById('tickets').value;
    if (tickets < 1 || tickets > 10) {
        isValid = false;
        document.getElementById('ticketsError').textContent = 'Please enter a number between 1 and 10.';
    } else {
        document.getElementById('ticketsError').textContent = '';
    }

    // Display su14.1182.0ccess message if form is valid
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Registration successful!';
    }
});

