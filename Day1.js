/*
1. What is a variable in JavaScript?
*/
A variable is a named container used to store data/value.
let age = 26;

/*
2. What are the three keywords used to create variables?
*/
var
let
const

/*
3. Write the syntax to create a variable using var.
*/
var name = "Karthik”;

/*
4. Write the syntax to create a variable using let.
*/
let city = "HYD”;

/*
5. Write the syntax to create a variable using const.
*/
const country = "India";

/*
6. What is declaration?
*/
Declaration means creating a variable without giving it a value.
let salary;


/*
7. What is initialization?
*/
Initialization means giving a value to a variable for the first time.
let marks = 95;

/*
8. What is reassignment?
*/
Reassignment means changing the existing value of a variable.
let number = 10;
number = 20;

/*
9. What is redeclaration?
*/
Redeclaration means declaring the same variable again.

/*
10. Which keyword allows redeclaration?
*/
var

/*
11. Which keyword allows reassignment?
*/
var and let

/*
12. Which keyword requires initialization when declared?
*/
const

/*
13. Identify the declaration and initialization:
let age = 26;
*/
Declaration → let age
Initialization → 26

let studentAge = 26;


/*
14. What is the value of a?
var a = 100;
console.log(a);
*/

var a = 100;
console.log(a);

/*
15. Change the value of this variable to 200:

let number = 100;
*/
let newNumber = 100;
newNumber = 200;


/*
var
*/

/*
16. What will be the output?
var a = 20;
console.log(a);

Output: 20
*/

var varA = 20;
console.log(varA);

/*
17. What will be the output?
var a = 10;
a = 20;
console.log(a);

Output: 20
*/

var varB = 10;
varB = 20;
console.log(varB);

/*
18. What will be the output?
var a = 10;
var a = 30;
console.log(a);

Output: 30
*/
var varC = 10;
var varC = 30;
console.log(varC);

/*
19. Write a var variable named name with the value "John".
*/
var personName = "Karthik”;

/*
20. Create a var variable named price with the value 500.
*/
var price = 1000;

/*
21. Reassign price from 500 to 1000.
*/
price = 1000;

/*
22. What will be the output?
var x = 50;
x = 100;
console.log(x);

Output: 100
*/
var x = 50;
x = 100;
console.log(x);

/*
23. Can a var variable be reassigned?
Yes.
*/
var varValue = 10;
varValue = 20;

/*
24. Can a var variable be redeclared?
Yes.
*/
var redeclareVar = 10;
var redeclareVar = 20;

/*
25. Write an example of var redeclaration.
*/
var firstName = "Karthik”;
var firstName = "Vemula”;
console.log(firstName);

/*
let
*/

/*
26. Create a let variable named age with the value 25.
*/
let letAge = 25;

/*
27. What will be the output?
let age = 20;
age = 30;
console.log(age);

Output: 30
*/
let anotherAge = 20;
anotherAge = 30;
console.log(anotherAge);

/*
28. Can a let variable be reassigned?

Yes.
*/
let letNumber = 10;
letNumber = 20;

/*
29. Can a let variable be redeclared?
*/
No, not in the same scope.

/*
30. Find the error:

let name = "Karthik”;
let name = "Vemula;
*/
Error:
Identifier 'name' has already been declared.

Correct way:
let name = "Karthik”;
name = "Vemula;

  let letName = "Karthik";
letName = "Vemula";

/*
31. Create a let variable called city and assign "Chennai".
*/
let letCity = "Hyd”;

/*
32. Change the value of city to “Warangal.
*/
letCity = "Warangal";

/*
33. What will be the output?

let x = 10;
x = 50;
console.log(x);

Output: 50
*/
let letX = 10;
letX = 50;
console.log(letX);

/*
34. Write a let variable called salary with the value 25000.
*/
let letSalary = 20000;

/*
35. Reassign salary to 20000.
*/
letSalary = 20000;

/*
const
*/

/*
36. Create a const variable called pi with the value 3.19.
*/
const pi = 3.19;

/*
37. Can a const variable be reassigned?
*/
No.

/*
38. Can a const variable be redeclared?
*/
No.

/*
39. What is wrong with this code?

const age;
age = 26;
*/

const must be initialized when it is declared.
Correct:
const age = 26;
const constAge = 26;


/*
40. What happens here?
const price = 500;
price = 1000;
*/
This produces an error because const cannot be reassigned.

/*
41. Create a const variable called country with the value "India".
*/
const constCountry = "India";

/*
42. What will be the output?
const x = 100;
console.log(x);

Output: 100
*/
const constX = 100;
console.log(constX);

/*
43. Which keyword should you use if the value should not be reassigned?
const
*/
const permanentValue = 500;

/*
44. What is the difference between let and const?

let:
- Can be reassigned
- Cannot be redeclared in the same scope
*/
const:
- Cannot be reassigned
- Cannot be redeclared in the same scope

/*
45. What is the difference between var and const?
*/
var:
- Can be reassigned
- Can be redeclared
- Can be declared without initialization

const:
- Cannot be reassigned
- Cannot be redeclared
- Must be initialized when declared

/*
PRINTING & CONSOLE
*/

/*
46. Write JavaScript code to print Hello World using console.log().
*/
console.log("Hello World");

/*
47. Write JavaScript code to print the number 500 using console.log().
*/
console.log(500);

/*
48. What is the purpose of console.warn()?
*/
console.warn() is used to display a warning message.

console.warn("This is a warning");


/*
49. What is the purpose of console.error()?
*/
console.error() is used to display an error message.

console.error("Something went wrong");


/*
50. What is the purpose of each?

alert()
prompt()
confirm()
document.writeln()
console.log()
*/

/*
alert()
*/
alert("Hello");

/*
prompt()
*/
let userName = prompt("Enter your name");
console.log(userName);

/*
confirm()
*/
let result = confirm("Are you sure?");
console.log(result);

/*
document.writeln()
*/
document.writeln("Hello World");

/*
console.log().
*/
console.log("JavaScript ");



/*
Create a variable for student name, age, and mark and print all three.
*/
let studentName = "Karthik";
let age = 24;
let mark = 85;

document.write("Student Name: " + studentName + "<br>");
document.write("Age: " + age + "<br>");
document.write("Mark: " + mark + "<br>");

/*
Ask the user's name using prompt() and display it using alert().
*/
let name = prompt("Enter your name");
alert(name);

/*
Ask the user's age using prompt() and print it using console.log().
*/
let userAge = prompt("Enter your age");
console.log(userAge);

/*
Ask the user a question using confirm().
*/
let answer = confirm("Do you want to continue?");
console.log(answer);

/*
Ask the user's name and display it on the webpage using document.writeln().
*/
let userName = prompt("Enter your name");
document.writeln(userName);
