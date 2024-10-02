/**
Exercise 1
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
    console.log("EXERCISE 1");

    let item = ["Egg", 0.25, 12];

    const [name, quantity, price] = item;

    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
}

// /**
// Exercise 2
// Rewrite the code below to assign each number to the right variable.
// */
{
    console.log("EXERCISE 2");

    let numbers = [3, 5, 4, 2, 6, 1];

    let [three, five, four, two, six, one] = numbers;

    console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
}

// /**
// Exercise 3
// We have an object called 'user'.
// Write the destructuring assignment that reads:
// - 'name' property into the variable 'name'.
// - 'years' property into the variable 'age'.
// - 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
// */
{
    console.log("EXERCISE 3");

    let user = { name: "John", years: 30 };

    let { name, years: age, isAdmin = false } = user;

    console.log(name); // John
    console.log(age); // 30
    console.log(isAdmin); // false
    console.log();
}

// /**
// Exercise 4
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// */
{
    console.log("EXERCISE 4");

    let person = [12, "Chris", "Owen"];

    let [age, firstName, lastName] = person;

    console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
    console.log();
}

// /**
// Exercise 5
// Rewrite the code below to use array destructuring instead of assigning each value to a variable.
// Make sure not to have unused variables.
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
{
    console.log("EXERCISE 5");

    let person = ["Chris", 12, "Owen"];

    let [firstName, age, lastName] = person;

    console.log(`Name: ${firstName} ${lastName} | Age : ${age}`);
    console.log();
}

// /**
// Exercise 6
// Using Array Destructuring get the last name from the array.
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
{
    console.log("EXERCISE 6");

    const students = ["Christina", "Jon", "Alexandare"];

    const [] = students;
    lastName = students[students.length - 1];

    console.log(lastName);
    console.log();
}

// /**
// Exercise 7
// Using Array Destructuring get all of the names from this Nested Array
// Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
// */
{
    console.log("EXERCISE 7");

    const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

    // Write your code here
    const [student1, [student2, student3], [student4, student5]] = moreStudents;

    console.log(student1, student2, student3, student4, student5);
}

// /**
// Exercise 8
// Using Object & Array Destructuring return the sentence below
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// */
{
    console.log("EXERCICE 8");

    function nestedArrayAndObject() {
        // refactor this to a single line of destructuring...
        const info = {
            title: "Once Upon a Time",
            protagonist: {
                name: "Emma Swan",
                enemies: [
                    { name: "Regina Mills", title: "Evil Queen" },
                    { name: "Cora Mills", title: "Queen of Hearts" },
                    { name: "Peter Pan", title: `The boy who wouldn't grow up` },
                    { name: "Zelena", title: "The Wicked Witch" },
                ],
            },
        };

        const {
            title,
            protagonist: {
                name: protagonistName,
                enemies: [{ name: enemyName1, title: enemyTitle1 }, { name: enemyName2, title: enemyTitle2 }, { name: enemyName3, title: enemyTitle3 }, { name: enemyName4, title: enemyTitle4 }],
            },
        } = info;

        console.log(`${enemyName4} (${enemyTitle4}) is an enemy to ${protagonistName} in "${title}"`);
        return `${enemyName4} (${enemyTitle4}) is an enemy to ${protagonistName} in "${title}"`;
    }
}
nestedArrayAndObject();