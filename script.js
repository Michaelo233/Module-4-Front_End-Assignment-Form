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

function validateForm() {
    let isValidForm = true;

    if (nameInput.value.trim() === ""){
        showInputError(nameInput, "Please enter your Full name.");
        isValidForm = false;
    }else if (!/^[A-Za-z\s]+$/.test(nameInput.value.trim())){
        showInputError(nameInput, "Please enter a valid name.");
        isValidForm = false;
    }
    
    if (emailInput.value.trim() === ""){
        showInputError(emailInput, "Please enter your email address.");
        isValidForm = false;
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())){
        showInputError(emailInput, "Please enter a valid email address.");
        isValidForm = false;
    }
    
    if (numberInput.value.trim() === ""){
        showInputError(numberInput, "Please enter your phone number.");
        isValidForm = false;
    }else if (!/^[0-9]+$/.test(numberInput.value.trim())){
        showInputError(numberInput, "Please enter a valid phone number.");
        isValidForm = false;
    }
    
    if (selectCountryInput.value === ""){
        showInputError(selectCountryInput, "Please select your country of residence.");
        isValidForm = false;
    }
    
    const isOneChecked = Array.from(radioChecked).some(box => box.checked);
    if (!isOneChecked) {
        showInputError(radioChecked[0], "Please select at least one favorite game type.");
        isValidForm = false;
    }

    if (thoughtInput.value.trim() === ""){
        showInputError(thoughtInput, "Please tell us about your favorite game type.")
        isValidForm = false
    }

    return isValidForm;
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('submit button clicked\n');

    if(validateForm()) {
        form.submit();
    }
    else {
        console.log("Form has errors.");
    }
})