// Task 1 
console.log("TASK 1");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2
console.log("TASK 2");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Task 3
console.log("TASK 3");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 4
console.log("TASK 4");

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Task 5
console.log("TASK 5");

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Task 6

console.log("TASK 6");

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

// Task 7
console.log("TASK 7");

let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log(sum);

// Task 8
console.log("TASK 8");

let a = 1;

do {
    console.log(a);
    a++;
} while (a <= 5);

// Task 9
console.log("TASK 9");

let b = 10;

do {
    console.log(b);
    b++;
} while (b <= 5);

/*
OUTPUT:

10

WHY?

A do...while loop executes the code at least ONE TIME
before checking the condition.

First:
b = 10

The code executes:
console.log(b);

So 10 is printed.

Then:
b becomes 11

Now condition is checked:

11 <= 5  --> false

Therefore, the loop stops.
*/

// Task 10
console.log("TASK 10");

let name = "javascript";

for (let character of name) {
    console.log(character);
}

// Task 11
console.log("TASK 11");

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Task 12
console.log("TASK 12");

let students = [
    "Arun",
    "Priya",
    "Naveen",
    "Karthik",
    "Rahul"
];

for (let student of students) {
    console.log("Student: " + student);
}

// Task 13
console.log("TASK 13");

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

// Task 14
console.log("TASK 14");

let product = {
    productName: "Laptop",
    price: 55000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}

// Task 15
console.log("TASK 15");

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// Task 16
console.log("TASK 16");

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");

// Task 17
console.log("TASK 17");

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Arun", 20, "Computer Science");

student("Priya", 21, "Information Technology");

student("Naveen", 22, "Electronics");

// Task 18

console.log("TASK 18");

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

// Task 19
console.log("TASK 19");

function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);

console.log(employeeSalary);

// Task 20
console.log("TASK 20");

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);

console.log("Total Salary:", totalSalary);


// Task 21
console.log("TASK 21");

function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");

/*
OUTPUT:

Name: Arun
Role: Developer

Name: Priya
Role: Designer
*/


// Task 22
console.log("TASK 22");

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(10));
console.log(square(15));
console.log(square(20));

// Task 23
console.log("TASK 23");

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));

// Task 24
console.log("TASK 24");

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));

// Task 25
console.log("TASK 25");

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    console.log(a); // 10

    // console.log(b); 
    // ReferenceError

    // console.log(c);
    // ReferenceError
}

test();

/*
IMPORTANT:

var:
- Function scoped
- Can be accessed outside the if block
- So a = 10 works

let:
- Block scoped
- Cannot be accessed outside the if block

const:
- Block scoped
- Cannot be accessed outside the if block

Therefore:

10
20
30
10

Then ReferenceError occurs at console.log(b).
*/

// Task 26
console.log("TASK 26");

console.log(x);

var x = 10;

/*
OUTPUT:

undefined

Why?

var declaration is hoisted.

JavaScript internally behaves approximately like:

var x;

console.log(x);

x = 10;
*/


// Task 27
console.log("TASK 27");

// console.log(y);
// let y = 20;

/*
OUTPUT:

ReferenceError

let is hoisted but it is in the
Temporal Dead Zone (TDZ).

You cannot access it before declaration.
*/

// Task 28
console.log("TASK 28");

// console.log(z);
// const z = 30;

/*
OUTPUT:

ReferenceError

const also has the Temporal Dead Zone.

Difference:

var   -> undefined
let   -> ReferenceError
const -> ReferenceError
*/

// Task 29
console.log("TASK 29");

(function() {
    console.log("Welcome to JavaScript");
})();


// IIFE with parameters

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

// Task 30
console.log("TASK 30");

function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

/*
welcomeMessage = CALLBACK

execute = HIGHER-ORDER FUNCTION

Why?

execute() accepts another function as an argument.

welcomeMessage is passed as the callback.
*/

// Task 31
console.log("TASK 31");

function* cashback() {

    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGenerator = cashback();

for (let value of cashbackGenerator) {
    console.log(value);
}

// Task 32
console.log("TASK 32");


// 1. EMPLOYEE DATA

let employees = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Naveen",
        age: 26,
        department: "IT",
        role: "Software Engineer",
        salary: 50000
    },

    {
        name: "Karthik",
        age: 23,
        department: "Finance",
        role: "Accountant",
        salary: 38000
    },

    {
        name: "Rahul",
        age: 27,
        department: "IT",
        role: "Team Lead",
        salary: 60000
    }

];


// 2. FOR...OF

console.log("ALL EMPLOYEES");

for (let employee of employees) {

    console.log(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}



// 3. FOR...IN

console.log("EMPLOYEE DETAILS");

for (let employee of employees) {

    console.log("--------------------");

    for (let key in employee) {
        console.log(key + ":", employee[key]);
    }
}

// 4. FUNCTION

function displayEmployee(name, age, department, role, salary) {

    console.log("--------------------");
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


// 5. FUNCTION PARAMETERS

console.log("DISPLAY EMPLOYEES");

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );
}

// 6. RETURN

function getSalary(employee) {

    return employee.salary;
}

console.log("SALARIES");

for (let employee of employees) {

    let salary = getSalary(employee);

    console.log(employee.name + ":", salary);
}

// 7. CONDITION

console.log("SALARY CHECK");

for (let employee of employees) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name + " earns 40000 or more"
        );

    } else {

        console.log(
            employee.name + " earns less than 40000"
        );
    }
}

// 8. ARROW FUNCTION

let annualSalary = (salary) => {

    return salary * 12;

};

console.log("ANNUAL SALARY");

for (let employee of employees) {

    console.log(
        employee.name + ":",
        annualSalary(employee.salary)
    );
}

// 9. GENERATOR
function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

console.log("EMPLOYEE BENEFITS");

for (let benefit of employeeBenefits) {

    console.log(benefit);
}