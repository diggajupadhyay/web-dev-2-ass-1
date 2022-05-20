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
    alert("Thank you for submitting your application.\n\nWe will contact you shortly.");
}

// Property Page form Validation
var form = document.getElementsByTagName('form')[0]; // Get the form element
form.addEventListener('submit', function (e) { // e is the event
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
    // submit form reloads the website
    else {
        alert('Thank you for submitting the form.'); // alert user that form has been submitted
    }
});

