
// Printing out my information using string concatenation data type.

let my = 'My';
let javascript = 'Javascript';
let task = 'task';
let heading = my + ' ' + javascript + ' ' + task;
console.log (heading);


const myName = 'Name:';
const firstName = 'Debbie';
const lastName = 'Jackson';
const fullName = myName + ' ' + firstName + ' ' + lastName ;
console.log (fullName);


const myHeight = 'Height:'
const feet = "5'6";
const fullHeight = myHeight + ' ' + feet
console.log (fullHeight);

const myCountry = 'Country:';
const nigeria = 'Nigeria';
const fullCountry = myCountry + ' ' + nigeria
console.log (fullCountry);







// Printing to screen using templte string method and linking to my HTML with document.write


const title = "Javascript"
const name = "Debbie Jacskon";
const height = "5 foot 6 Inches";
const country = "Nigeria";


let Title = `<h1>My ${title} task </h1>`;
document.write (Title)

let Name = `Name: ${name}`;

document.write(Name);

let Height = `<br> Height: ${height}`;
document.write (Height);


let Country = `<br> Country: ${country}`;
document.write (Country);




