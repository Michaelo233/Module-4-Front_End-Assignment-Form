# Breakpoint 1

This breakpoint checks the value of isValidForm when the submit button is
 clicked, focusing only on the name input.
Initially, when the submit button is clicked, the name value is empty, and
 the isValidForm boolean is not yet set.

As we step through the code, the debugger enters the showError function and
 then reaches the return statement.
After this, isValidForm is updated to false because the name value is empty,
 preventing form submission.

# Breakpoint 2

This breakpoint monitors the overall value of isValidForm during the submit
event when all input values are available, but some may not meet the 
required validation (e.g., email regex).

When the submit button is clicked, all input values are displayed in the
debugger scope.

The debugger steps through each validation function, checking their return
 statements.
After completing all checks, isValidForm becomes false because the email 
input is invalid, preventing the form from submitting.

# Breakpoint 3

This breakpoint shows what happens inside the showError function when an 
input value is empty or invalid, and the corresponding error message sent
to the user.

When the submit button is clicked, the error message for the invalid element
 (e.g., a radio input) appears in the scope.

Initially, isValidForm remains true because we haven’t stepped into
 showError yet.

After stepping through showError, isValidForm changes to false, preventing
 the form submission.

# Critical State analysis.

- What does this state tell you about your program's logic?
The program correctly validates input fields and updates the isValidForm 
boolean based on whether each field meets the required criteria.
Validation and error display are handled in sequence, ensuring invalid 
inputs are caught before submission.

- Is the program behaving as expected at this point? Why or why not?
Yes. The program identifies invalid or empty inputs, prevents form 
submission, and displays appropriate error messages.
This shows that both the validation logic and the UI feedback are 
working as intended.

- How does this state connect to your program’s next steps?
Since isValidForm is false, the form is not submitted, and the program 
waits for the user to correct the inputs.
Once all inputs are valid, isValidForm will become true, allowing the 
form to submit successfully.