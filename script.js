const submitButton = document.getElementById("submit");
// const errorDiv = document.getElementsByClassName("error")

function showInputError(inputElement, message){
    const errorContainer = inputElement.closest(".error");
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-display"
    errorDisplay.setAttribute("role", "alert");
    errorContainer.appendChild(errorDisplay);
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit button clicked\n');
})