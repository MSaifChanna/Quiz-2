// Task 1: Write a function that calculates the percentage of a number with respect to the total amount.
function calculatePercentage(number, totalAmount) {
    if (typeof number !== 'number' || typeof totalAmount !== 'number' || totalAmount === 0) {
        return "Invalid input";
    }

    const percentage = (number / totalAmount) * 100;
    return percentage;
}

// Task 2: Create an array of objects containing persons' information and print their details.
const persons = [
    {
        id: 1,
        personName: "Fahad",
        personAge: 23,
        personIncome: 2000000,
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: 23,
        personIncome: 3000000,
    },
];

for (const person of persons) {
    console.log(`Person ${person.id} name is ${person.personName} having salary ${person.personIncome}`);
}

// Sample usage of Task 1
const number = 500000;
const totalAmount = 2000000;
const percentage = calculatePercentage(number, totalAmount);
console.log(`Percentage of ${number} with respect to ${totalAmount} is ${percentage.toFixed(2)}%`);

// Sample object
const personObject = {
    id: 1,
    personName: "Fahad",
    personAge: 23,
    personIncome: 2000000,
};

// Task 3: Function to print properties of an object
function printObjectProperties(obj) {
    console.log("Properties are below:");
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }
}

// Call the function with the sample object
printObjectProperties(personObject);
