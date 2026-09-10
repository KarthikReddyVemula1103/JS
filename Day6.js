// Task 1 

function studentResult(name, department, marks) {

    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    let result = average >= 50 ? "Pass" : "Fail";

    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("\n========== TASK 1 ==========");
    console.log("Student Result");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total Marks:", total);
    console.log("Average:", average.toFixed(2));
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult(
    "Arun",
    "Computer Science",
    [85, 90, 78, 88, 92]
);


// Task 2 

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("\n========== TASK 2 ==========");
    console.log("Employee Salary Calculator");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);

// Task 3

let products = [
    {
        name: "Laptop",
        price: 55000,
        category: "electronics"
    },
    {
        name: "Mouse",
        price: 800,
        category: "electronics"
    },
    {
        name: "Shirt",
        price: 1200,
        category: "fashion"
    },
    {
        name: "Shoes",
        price: 2500,
        category: "fashion"
    },
    {
        name: "Phone",
        price: 30000,
        category: "electronics"
    }
];


// Products above ₹2,000
let above2000 = products.filter(
    product => product.price > 2000
);

console.log("\n========== TASK 3 ==========");
console.log("Products above ₹2,000:");
console.log(above2000);


// Only electronics
let electronics = products.filter(
    product => product.category === "electronics"
);

console.log("Electronics:");
console.log(electronics);


// First product below ₹1,000
let below1000 = products.find(
    product => product.price < 1000
);

console.log("First product below ₹1,000:");
console.log(below1000);


// Total price of all products
let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total Product Price:", totalProductPrice);


// Any product above ₹50,000
let anyAbove50000 = products.some(
    product => product.price > 50000
);

console.log("Any product above ₹50,000:", anyAbove50000);


// Every product above ₹500
let everyAbove500 = products.every(
    product => product.price > 500
);

console.log("Every product above ₹500:", everyAbove500);


// Task 4 

let employeeList = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "HR Manager",
        salary: 45000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "UI Designer",
        salary: 35000
    },
    {
        id: 105,
        name: "Rahul",
        role: "Project Manager",
        salary: 60000
    },
    {
        id: 106,
        name: "Sneha",
        role: "Software Engineer",
        salary: 55000
    }
];

console.log("\n========== TASK 4 ==========");


// Display all employee names
let allEmployeeNames = employeeList.map(
    employee => employee.name
);

console.log("All Employee Names:");
console.log(allEmployeeNames);


// Employees earning above ₹40,000
let employeesAbove40000 = employeeList.filter(
    employee => employee.salary > 40000
);

console.log("Employees earning above ₹40,000:");
console.log(employeesAbove40000);


// Find employee with ID 103
let employeeId103 = employeeList.find(
    employee => employee.id === 103
);

console.log("Employee with ID 103:");
console.log(employeeId103);


// Calculate total salary
let totalEmployeeSalary = employeeList.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Salary:", totalEmployeeSalary);


// Find highest-paid employee
let highestPaidEmployee = employeeList.reduce(
    (highest, employee) =>
        employee.salary > highest.salary
            ? employee
            : highest
);

console.log("Highest Paid Employee:");
console.log(highestPaidEmployee);


// Sort highest salary to lowest
let salaryHighToLow = [...employeeList].sort(
    (a, b) => b.salary - a.salary
);

console.log("Salary High → Low:");
console.log(salaryHighToLow);


// Array containing only employee names
let namesOnly = employeeList.map(
    employee => employee.name
);

console.log("Names Only:");
console.log(namesOnly);

// Task 5

let cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
];

function calculateCart(cart) {

    console.log("\n========== TASK 5 ==========");
    console.log("Shopping Cart");


    // Item totals
    let itemTotals = cart.map(item => {

        return {
            name: item.name,
            total: item.price * item.quantity
        };

    });

    console.log("Item Totals:");
    console.log(itemTotals);


    // Total cart value
    let totalCartValue = cart.reduce(
        (total, item) =>
            total + (item.price * item.quantity),
        0
    );

    console.log("Total Cart Value:", totalCartValue);


    // Discount
    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    console.log("Discount:", discount);


    // Final amount
    let finalPayableAmount =
        totalCartValue - discount;

    console.log(
        "Final Payable Amount:",
        finalPayableAmount
    );
}

calculateCart(cart);

// Task 6

let students = [
    {
        name: "Arun",
        age: 21,
        mark: 85
    },
    {
        name: "Priya",
        age: 22,
        mark: 92
    },
    {
        name: "Karthi",
        age: 20,
        mark: 67
    },
    {
        name: "Dinesh",
        age: 23,
        mark: 45
    }
];

console.log("\n========== TASK 6 ==========");
console.log("Student Search System");


// Display all student names
let studentNames = students.map(
    student => student.name
);

console.log("All Student Names:");
console.log(studentNames);


// Students above 80
let studentsAbove80 = students.filter(
    student => student.mark > 80
);

console.log("Students above 80:");
console.log(studentsAbove80);


// Find Priya
let priya = students.find(
    student => student.name === "Priya"
);

console.log("Student named Priya:");
console.log(priya);


// Calculate average mark
let totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
);

let averageMark = totalMarks / students.length;

console.log(
    "Average Mark:",
    averageMark.toFixed(2)
);


// Check whether anyone failed
let anyoneFailed = students.some(
    student => student.mark < 50
);

console.log(
    "Anyone Failed:",
    anyoneFailed
);


// Check whether everyone scored above 40
let everyoneAbove40 = students.every(
    student => student.mark > 40
);

console.log(
    "Everyone scored above 40:",
    everyoneAbove40
);


// Sort students by marks
let studentsSorted = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("Students Sorted by Marks:");
console.log(studentsSorted);

// Task 7

let numbers = [
    12,
    5,
    8,
    21,
    44,
    7,
    30,
    15
];

console.log("\n========== TASK 7 ==========");
console.log("Array Transformation");


// Numbers × 2
let doubledNumbers = numbers.map(
    number => number * 2
);

console.log("Numbers × 2:");
console.log(doubledNumbers);


// Even numbers
let evenNumbers = numbers.filter(
    number => number % 2 === 0
);

console.log("Even Numbers:");
console.log(evenNumbers);


// Numbers greater than 15
let greaterThan15 = numbers.filter(
    number => number > 15
);

console.log("Numbers Greater Than 15:");
console.log(greaterThan15);


// First number greater than 20
let firstGreaterThan20 = numbers.find(
    number => number > 20
);

console.log(
    "First Number Greater Than 20:",
    firstGreaterThan20
);


// Total of all numbers
let numberTotal = numbers.reduce(
    (total, number) => total + number,
    0
);

console.log("Total:", numberTotal);


// Any number greater than 40
let anyGreaterThan40 = numbers.some(
    number => number > 40
);

console.log(
    "Any Number Greater Than 40:",
    anyGreaterThan40
);


// Every number is positive
let everyPositive = numbers.every(
    number => number > 0
);

console.log(
    "Every Number Positive:",
    everyPositive
);


// Sort highest to lowest
let numbersHighToLow = [...numbers].sort(
    (a, b) => b - a
);

console.log("Highest to Lowest:");
console.log(numbersHighToLow);

// Task 8

console.log("\n========== TASK 8 ==========");
console.log("String Analyzer");

let sentence = prompt("Enter a sentence:");


// Total characters
console.log(
    "Total Characters:",
    sentence.length
);


// Uppercase
console.log(
    "Uppercase:",
    sentence.toUpperCase()
);


// Lowercase
console.log(
    "Lowercase:",
    sentence.toLowerCase()
);


// Contains JavaScript
console.log(
    'Contains "JavaScript":',
    sentence.includes("JavaScript")
);


// First character
console.log(
    "First Character:",
    sentence.slice(0, 1)
);


// Last character
console.log(
    "Last Character:",
    sentence.slice(-1)
);


// Number of words
let words = sentence.trim().split(/\s+/);

console.log(
    "Number of Words:",
    words.length
);


// Replace JavaScript with Python
console.log(
    "After Replacement:",
    sentence.replace(
        "JavaScript",
        "Python"
    )
);


// Convert sentence into array
console.log(
    "Sentence Array:",
    sentence.split(" ")
);

// Final Mini Project

let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

console.log("\n\n====================================");
console.log("       EMPLOYEE DASHBOARD");
console.log("====================================");

// 1. Employee List

console.log("\n1. ALL EMPLOYEES");

dashboardEmployees.forEach(employee => {

    console.log(
        "ID:", employee.id,
        "| Name:", employee.name,
        "| Department:", employee.department,
        "| Salary: ₹" + employee.salary,
        "| Experience:", employee.experience + " years"
    );

});

// 2. Search Employee by Name

let searchEmployeeName = "Arun";

let searchedEmployee =
    dashboardEmployees.find(
        employee =>
            employee.name.toLowerCase() ===
            searchEmployeeName.toLowerCase()
    );

console.log("\n2. SEARCH EMPLOYEE");
console.log(
    "Search:",
    searchEmployeeName
);
console.log(
    "Result:",
    searchedEmployee
);

// 3. Department Filter

let selectedDepartment = "IT";

let filteredDepartment =
    dashboardEmployees.filter(
        employee =>
            employee.department ===
            selectedDepartment
    );

console.log("\n3. DEPARTMENT FILTER");
console.log(
    "Department:",
    selectedDepartment
);
console.log(filteredDepartment);

// 4. Salary Filter

let employeesAbove50000 =
    dashboardEmployees.filter(
        employee => employee.salary > 50000
    );

console.log("\n4. SALARY FILTER");
console.log(
    "Employees earning more than ₹50,000:"
);
console.log(employeesAbove50000);


// 5. Total Company Salary

let companySalary =
    dashboardEmployees.reduce(
        (total, employee) =>
            total + employee.salary,
        0
    );

console.log("\n5. TOTAL COMPANY SALARY");
console.log("₹" + companySalary);

// 6. Highest Salary

let highestSalary =
    dashboardEmployees.reduce(
        (highest, employee) =>
            employee.salary > highest.salary
                ? employee
                : highest
    );

console.log("\n6. HIGHEST SALARY");
console.log(highestSalary);

// 7. Experience Filter

let experiencedEmployees =
    dashboardEmployees.filter(
        employee => employee.experience > 3
    );

console.log(
    "\n7. EMPLOYEES WITH MORE THAN 3 YEARS EXPERIENCE"
);

console.log(experiencedEmployees);

// 8. Sorting — Low to High

let salaryLowToHigh =
    [...dashboardEmployees].sort(
        (a, b) => a.salary - b.salary
    );

console.log("\n8. SALARY LOW → HIGH");
console.log(salaryLowToHigh);

// Sorting — High to Low

let salaryHighToLowDashboard =
    [...dashboardEmployees].sort(
        (a, b) => b.salary - a.salary
    );

console.log("\nSALARY HIGH → LOW");
console.log(salaryHighToLowDashboard);

// 9. Statistics

let totalEmployees =
    dashboardEmployees.length;

let averageSalary =
    companySalary / totalEmployees;


console.log("\n====================================");
console.log("           STATISTICS");
console.log("====================================");

console.log(
    "Total Employees:",
    totalEmployees
);

console.log(
    "Total Salary: ₹" +
    companySalary
);

console.log(
    "Highest Salary: ₹" +
    highestSalary.salary
);

console.log(
    "Average Salary: ₹" +
    averageSalary.toFixed(0)
);

console.log("====================================");