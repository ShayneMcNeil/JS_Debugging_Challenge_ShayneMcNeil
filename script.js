let student_name = "Nadia"; // Add let and added double quotes around Nadia
let studentAge = "20"; // Add let and switched = to == 
let isEnrolled = true; // Add let and changed True to true

document.write("<h2>Student Info</h2>")
document.write("Name: " + student_name + "<br>"); // Added quotes around <br> tag and changed studentName to student_name
document.write("Age: " + studentAge); // Changed student_age to studentAge
document.write("Enrolled: " + isEnrolled); // Added semicolon

let ageString = String(studentAge); // Added let
document.write("Age Type: " + typeof(ageString)); //Fixed the typeof() function and added + to concatenate 

let num1 = prompt("Enter first number"); // Add let
let num2 = prompt("Enter second number"); // Add let
let total = num1 + num2; // Add let

document.write("Sum: " + total); // Add semicolon 

let userAge = prompt("Enter your age"); // Add let
if (userAge >= 18) { // Changed = to >=
    document.write("You can vote!"); 
} else if (userAge < 18) {  // Changed from else to else if
    document.write("Sorry, you can't vote."); 
};

for (i = 1; i < 10; i++) 
    document.write(i); // Add semicolon

let num = prompt("Enter a number greater than 10:"); // Initiate num variable to use in the while loop and prompt user for input 

while(num < 10) // Added parentheses around loop condition 
    num = prompt("Enter a number greater than 10"); // Added a semicolon

document.write(num); // Added this just to print what number the user added 