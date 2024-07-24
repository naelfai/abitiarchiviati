document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("YqQyky2mzOuZ9E-NRg"); 

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

       
        var formData = {
            subject: document.getElementById('subject').value,
            first_name: document.getElementById('first-name').value,
            last_name: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        console.log('Form Data:', formData);

      
        emailjs.send('service_6kefc95', 'template_ocmjgyl', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('form-status').innerText = 'Submitted!';
        }, function(error) {
            console.log('FAILED...', error);
            console.error('Error details:', error); 
            document.getElementById('form-status').innerText = 'Failed to submit, please try again.';
        });
    });
});
