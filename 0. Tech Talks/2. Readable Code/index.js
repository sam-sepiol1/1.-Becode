// Meaningfull names
// BAD EXAMPLE 
let x = 10;
function f(y) {
    return y * y;
}

// GOOD EXAMPLE

// Small and focused functions
// Bad
function processUserData(user) {
    validateUser(user);
    saveUserToDatabase(user);
    sendWelcomeEmail(user);
}

// Good


// Consistent Indentation
// Bad
function add(a, b) 
    {
return a + b;
}

// Good

// Comment Your Code
// Bad
let y = 10; // set x to 10

// Good


// Avoid deep nesting 
// Bad
if (user) {
    if (user.isActive) {
        if (user.hasSubscription) {
            // do something
        }
    }
}

// Good
