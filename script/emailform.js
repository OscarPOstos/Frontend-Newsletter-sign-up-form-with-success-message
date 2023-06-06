export class EmailForm { 

    constructor(label, input, errorMessage, button) {
        this.label = label;
        this.input = input;
        this.errorMessage = errorMessage;
        this.button = button;
    }

    setListeners() {
        let emailForm = this;
        this.input.addEventListener("focus", function() { emailForm.convertToFocus(); });
        this.input.addEventListener("focusout", function() { emailForm.convertToNoFocus(); });
        this.input.addEventListener("change", function() { emailForm.convertToRegular(); });
        this.button.addEventListener("click", function() { emailForm.checkForm(); });
    }

    convertToInvalid() {
        this.input.style.border = "red 1px solid";
        this.input.style.backgroundColor = "rgba(249, 160, 160, 0.29)";
        this.input.style.color = "red";
        this.input.style.outline = "red solid 1px";
        this.errorMessage.style.display = "block";
    }

    convertToRegular() {
        this.input.style.border = "black 1px solid";
        this.input.style.backgroundColor = "white";
        this.input.style.color = "black";
        this.input.style.outline = "black solid 1px";
        this.errorMessage.style.display = "none";
    }

    convertToFocus() {
        this.input.style.outlineWidth = "1px";
    }

    convertToNoFocus() {
        this.input.style.outlineWidth = "0px";
    }

    checkForm() {
        if (!this.input.checkValidity()) {
            this.convertToInvalid();
        } else {
            document.getElementById("container").style.display = "none";
            document.getElementById("successContainer").style.display = "flex";
            document.getElementById("subscriptionMessage").innerHTML = "A confimation email has been sent to <b>"
            + this.input.value 
            + "</b>.Please open it and click the button inside to confirm your subscription";
        }
    }
}