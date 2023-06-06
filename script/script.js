import { EmailForm } from "./emailform.js";

let label = document.getElementById("label");
let input = document.getElementById("emailInput");
let errorMessage = document.getElementById("errorEmailMessage");
let button = document.getElementById("button");
let image = document.getElementById("image");
let dismissButton = document.getElementById("dismissButton");

let emailForm = new EmailForm(label, input, errorMessage, button);
emailForm.setListeners();

dismissButton.addEventListener("click", function() {
    document.getElementById("container").style.display = "flex";
    document.getElementById("successContainer").style.display = "none";
});

if(window.innerWidth < 900) {
    image.src = "assets/images/illustration-sign-up-mobile.svg";
} else {
    image.src = "assets/images/illustration-sign-up-desktop.svg";
}