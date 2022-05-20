// onblur event to transform input to uppercase
function onblurName() {
    var name = document.getElementById("name");
    name.value = name.value.toUpperCase();
}

// Property Page form Validation
function onsubmitForm() { // onsubmit event to submit the form and reload the window
    var name = document.getElementById("name").value; // get the value of the name input field
    var phone = document.getElementById("phone").value; // get the value of the phone input field
    var address = document.getElementById("address").value; // get the value of the address input field
    var price = document.getElementById("price").value; // get the value of the price input field

    if (name == '') { // if the name is empty
        alert("Please enter your name."); // alert the user
        return false; // prevent form from submitting
    }

    if (phone == '') { // if the phone number is empty
        alert("Please enter your phone number.");
        return false; // prevent form from submitting
    } else if (phone.length != 10) { // phone number must be more than 10 digits
        alert("Please enter a valid phone number.");
        return false;
    }

    if (address == '') { // if the address is empty
        alert("Please enter your address.");
        return false;
    }

    if (price == '') { // if the price is empty
        alert("Please enter the price.");
        return false;
    } else if (price <= 0) { // price must be more than 0
        alert("Please enter a valid price.");
        return false;
    }
    alert("Thank you. We are away right now. \n\nWe will contact you as soon as we see your query.");
}

// Contact Form Validation
function contactForm() {
    var name = document.getElementById("name").value; // get the value of the name input field
    var email = document.getElementById("email").value; // get the value of the email input field
    var message = document.getElementById("message").value; // get the value of the message input field
    var captcha = document.getElementById("captcha").value; // get the value of the captcha input field

    if (name == '') { // if the name is empty
        alert("Please enter your name."); // alert the user
        return false; // prevent form from submitting
    }
    if (email == '') { // if the email is empty
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) { // if the email is not valid
            alert("Please enter a valid email address.");
            return false;
        }
    } else if (message == '') { // if the message is empty
        // cannot be less than 10 characters
        alert("Please enter a message.");
        return false;
    }
}
