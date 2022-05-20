var policy = confirm("Inspections and applications are done via appointment only due to our company's covid policy.\n\nAre you sure you want to proceed?");
if (policy) {
    alert("Thank you for confirming.");
} else {
    alert("Sorry, you cannot visit the website unless you adhere to company's policy.");
}