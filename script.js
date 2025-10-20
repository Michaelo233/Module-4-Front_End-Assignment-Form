const submitButton = document.querySelector("#submit");
const selectCountryInput = document.querySelector("#country")
const nameInput = document.querySelector("#name");
const numberInput = document.querySelector("#number");
const emailInput = document.querySelector("#email");
const radioChecked = document.querySelectorAll('input[type="radio"]');
const thoughtInput = document.querySelector("#thoughts");
const form = document.querySelector("#form");
// const errorDiv = document.getElementsByClassName("error")

function showInputError(inputElement, message){
    const errorContainer = inputElement.closest(".error");
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-display"
    errorDisplay.setAttribute("role", "alert");
    errorContainer.appendChild(errorDisplay);
    console.log('Error Displayed\n');
}

function clearError() {
    let err = document.querySelectorAll(".error-display");
    err.forEach((err) => {
        err.remove();
    })
    console.log("Errors cleared\n");
}

function isNotEmpty() {
    let isValidForm = true;
    clearError();
    if (nameInput.value.trim() === ""){
        console.log("Error: Name is empty.\n");
        showInputError(nameInput, "Please enter your Full name.");
        isValidForm = false;
    }else if (!/^[A-Za-z\s]+$/.test(nameInput.value.trim())){
        console.log("Error: Name is Invalid format.\n");
        showInputError(nameInput, "Please enter a valid name.");
        isValidForm = false;
    }

    return isValidForm;
}

function isValidEmail(){
    isValidForm = true;

    if (emailInput.value.trim() === ""){
        console.log("Error: Email is empty.\n");
        showInputError(emailInput, "Please enter your email address.");
        isValidForm = false;
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())){
        console.log("Error: Email is invalid.\n");
        showInputError(emailInput, "Please enter a valid email address.");
        isValidForm = false;
    }

    if (thoughtInput.value.trim() === ""){
        showInputError(thoughtInput, "Please tell us about your favorite game type.")
        isValidForm = false;
    }
    return isValidForm;
}

function isValidNumber(){
    isValidForm = true;

    if (numberInput.value.trim() === ""){
        console.log("Error: Number is empty.\n");
        showInputError(numberInput, "Please enter your phone number.");
        isValidForm = false;
    }else if (!/^[0-9]+$/.test(numberInput.value.trim())){
        console.log("Error: Number is invalid.\n");
        showInputError(numberInput, "Please enter a valid phone number.");
        isValidForm = false;
    }
    return isValidForm;
}

function isSelected(){
    isValidForm = true;
    
    if (selectCountryInput.value === ""){
        console.log("Error: Country not selected.\n")
        showInputError(selectCountryInput, "Please select your country of residence.");
        isValidForm = false;
    }
    return isValidForm;
}

function hasCheckedOption(){
    isValidForm = true;
    
    const isOneChecked = Array.from(radioChecked).some(box => box.checked);
    if (!isOneChecked) {
        console.log("Error: Game type not checked.\n")
        showInputError(radioChecked[0], "Please select at least one favorite game type.");
        isValidForm = false;
    }
    return isValidForm;
}

submitButton.addEventListener("click", (e) => {
    console.log('submit button clicked\n');
    const validateForm = [isNotEmpty(),
    isValidEmail(),
    isValidNumber(),
    hasCheckedOption(),
    isSelected()];
    
    // Check if all forms are valid.
    const isValidForm = validateForm.every(result => result === true);

    if(isValidForm === true){
        console.log("Form submitted.");
        form.submit();
    }
    else {
        e.preventDefault();
        console.log("Form has errors.");
    }
})