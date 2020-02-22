const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
// let addMore = true;​

const render = require("./lib/htmlRenderer");
​
const questions = [{
  type: "input",
  message: "What is your manager's name?",
  name: "manager"
},{
  type: "input",
  message: "What is your manager's id?",
  name: "manID"
},{
  type: "input",
  message: "What is your manager's email?",
  name: "manEmail"
},{
  type: "input",
  message: "What is your manager's office number?",
  name: "manOffice"
},{
  type: "list",
  message: "Which type of team member would you like to add?",
  choices:["Intern", "Engineer"],
  name: "empType"
}]

const internQuestions = [{
  type: "input",
  message: "What is your intern's name?",
  name: "intName"
},{
  type: "input",
  message: "What is your intern's id?",
  name: "intID"
},{
  type: "input",
  message: "What is your intern's email?",
  name: "intEmail"
},{
  type: "input",
  message: "What is your intern's school?",
  name: "intSchool"
},{
  type: "list",
  message: "Which type of team member would you like to add?",
  name: "intEmpType",
  choices: ["Intern", "Engineer", "I don't want to add any more team members"]
}]

const engineerQuestions = [{
  type: "input",
  message: "What is your engineer's name?",
  name: "engName"
},{
  type: "input",
  message: "What is your engineer's id?",
  name: "engID"
},{
  type: "input",
  message: "What is your engineer's email?",
  name: "engEmail"
},{
  type: "input",
  message: "What is your engineer's GitHub username?",
  name: "engGH"
},{
  type: "list",
  message: "Which type of team member would you like to add?",
  name: "engEmpType",
  choices: ["Intern", "Engineer", "I don't want to add any more team members"]
}]

function init() {
  inquirer
  .prompt(questions.then((ans) => {
    if (ans.empType === "Intern") {
      intQuestions();
    } else if (ans.empType === "Engineer") {
      engQuestions();
    }
  }))
}

function intQuestions() {
  inquirer
  .prompt(internQuestions.then((ans) => {
    if (ans.intEmpType === "Intern") {
      // generate and populate the class and go to next input
      intQuestions();
    } else if (ans.intEmpType === "Engineer") {
      // generate and populate the class and go to next input
      engQuestions();
    } else if (ans.intEmpType === "I don't want to add any more team members") {
      //move on to generate
    }
  }))
}
​
function engQuestions() {
  inquirer
  .prompt(engineerQuestions.then((ans) => {
    if (ans.engEmpType === "Intern") {
      // generate and populate the class and go to next input
      intQuestions();
    } else if (ans.engEmpType === "Engineer") {
      // generate and populate the class and go to next input
      engQuestions();
    } else if (ans.engEmpType === "I don't want to add any more team members") {
      //move on to generate
    }
  }))
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
