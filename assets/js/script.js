// on page alert
// var policy = confirm("Inspections and applications are done via appointment only due to our company's covid policy.\n\nAre you sure you want to proceed?");
// if (policy) {
//     alert("Thank you for confirming.");
// } else {
//     alert("Sorry, you cannot visit the website unless you adhere to company's policy.");
// }

// onblur event to transform input to uppercase
function onblurName() {
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
}

// Onsubmit event to submit the form
function onsubmitForm() {
    alert("Thank you. We are away right now. \n\nWe will contact you as soon as we see your query.");
}

// Property Page form Validation
var form = document.getElementsByTagName('form')[0]; // Get the form element
form.addEventListener('submit', function (onsubmitForm) { // e is the event
    var name = document.getElementById('name').value; // get the value of the name input field
    var phone = document.getElementById('phone').value; // get the value of the phone input field
    var address = document.getElementById('address').value; // get the value of the address input field
    var price = document.getElementById('price').value; // get the value of the price input field

    // validate name
    if (name == '') { // if the name is empty
        alert('Please enter your name.');
        e.preventDefault(); // prevent form from submitting
    }

    // validate phone number 
    if (phone == '') { // if the phone number is empty
        alert('Please enter your phone number.');
        e.preventDefault();
    } else if (phone.length != 10) { // phone number must be more than 10 digits 
        alert('Please enter a valid phone number.');
        e.preventDefault(); // prevent form from submitting
    }

    // validate address
    if (address == '') { // if the address is empty
        alert('Please enter your address.');
        e.preventDefault(); // prevent form from submitting
    }

    // validate price
    if (price == '') { // if the price is empty
        alert('Please enter the price.');
        e.preventDefault(); // prevent form from submitting
    } else if (price <= 0) { // price must be more than 0
        alert('Please enter a valid price.');
        e.preventDefault(); // prevent form from submitting
    }
});

// Contact Page form validation
var form = document.getElementsByTagName('form')[1]; // Get the form element
form.addEventListener('submit', function (e) { // e is the event
    var name = document.getElementById('name').value; // get the value of the name input field
    var email = document.getElementById('email').value; // get the value of the email input field
    var message = document.getElementById('message').value; // get the value of the message input field

    // validate name
    if (name == '') { // if the name is empty
        alert('Please enter your name.');
        e.preventDefault(); // prevent form from submitting
    }

    // validate email with regex
    if (email == '') { // if the email is empty
        alert('Please enter your email.');
        e.preventDefault(); // prevent form from submitting
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) { // email must be in the correct format
        alert('Please enter a valid email.');
        e.preventDefault(); // prevent form from submitting
    }

    // validate message
    if (message == '') { // if the message is empty
        alert('Please enter your message.');
        e.preventDefault(); // prevent form from submitting
    }

    // check if the user has entered the correct number
    var captcha = document.getElementById('math').value; // get the value of the captcha input field
    if (captcha != '4') { // captcha must be 4
        alert('You need to enter the correct number.');
        e.preventDefault(); // prevent form from submitting
    }
});

