// TASK 1 

var studentName = "Naveen";
let studentAge = 22;
const collegeName = "ABC College";
console.log(studentName);
console.log(studentAge);
console.log(collegeName);
studentName = "Rahul";
studentAge = 23;
// collegeName = "SPEC";
console.log(studentName);
console.log(studentAge);
var studentName = "Kiran";
//let studentAge = 25;

//TASK 2 — 

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

//TASK 3 

let userName = prompt("Enter your name:");
alert("Welcome " + userName + "!");

// TASK 4

let birthYear = prompt("Enter your birth year:");
let currentYear = 2026;
let calculatedAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);


//TASK 5

let text = "Hello";
let number = 100;
let decimal = 25.5;
let isTrue = true;
let isFalse = false;
let valueUndefined = undefined;
let valueNull = null;
console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof valueUndefined);
console.log(typeof valueNull);

//TASK 6

let student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "B.Tech",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

//TASK 7 

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

//TASK 8 

let a = 20;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//TASK 9 
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let totalPrice = shirt + pant + shoes;
console.log("Total =", totalPrice);

//TASK 10 

let tamil = 80;
let english = 75;
let maths = 90;
let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);

//TASK 11

let postA = 10;
let postB = postA++;
console.log(postA);
console.log(postB);

//TASK 12

let preA = 10;
let preB = ++preA;
console.log(preA);
console.log(preB);

//TASK 13

let postDecA = 20;
let postDecB = postDecA--;
console.log(postDecA);
console.log(postDecB);

//TASK 14

let preDecA = 20;
let preDecB = --preDecA;
console.log(preDecA);
console.log(preDecB);

//TASK 15

let challengeA = 5;
let challengeB = challengeA++;
let challengeC = ++challengeA;
let challengeD = challengeB--;
console.log(challengeA);
console.log(challengeB);
console.log(challengeC);
console.log(challengeD);

//TASK 16

let num = 10;
num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);
num %= 5;
console.log(num);
num **= 5;
console.log(num);


//TASK 17

let Name = "Naveen";
let Age = 22;
let City = "Trichy";
let College = "ABC College";

let subjects = ["JavaScript","HTML","CSS","Java","Python"];
let employee={
    name:Karthik,
    age:26,
    city:Hyderabad,
    college:SPEC
};

console.log(studentProfile.name);
console.log(studentProfile.age);
console.log(studentProfile.city);
console.log(studentProfile.subjects[0]);
console.log(studentProfile.subjects[studentProfile.subjects.length - 1]);
console.log(studentProfile.subjects.length);
console.log(studentProfile);

//LAST TASK
let num1=+prompt("first number:")
let num2=+prompt(" Second number:")
console.log("First number:",num1);
console.log("Second number:",num2);
console.log("Addition:",num1+num2);
console.log("Subtraction:",num1-num2);
console.log("Multiplication:",num1*num2);
console.log("Division:",num1/num2);
console.log("Modulus:",num1%num2);
console.log("Power:",num1**num2);
