// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "What is the name of your project?",
        name: "Title"
    }, {
        type: "input",
        message: "What the goal of this project? Give a detailed output of what you want to acomplish with this project?",
        name: "Description"
    }, {
        type: "input",
        message: "Provide a quick visual of your project",
        name: "Visuals"
    }, {
        type: "input",
        message: "What is required for this project to be installed?",
        name: "Requirements"
    }, {
        type: "input",
        message: "How is this project run? Give instructions",
        name: "Usage"
    }, {
        type: "input",
        message: "Who contributed to this project?:",
        name: "Contributing"
    }, {
        type: "input",
        message: "Do you have any ideas for future releases?",
        name: "Roadmap"
    }, {
        type: "input",
        message: "Provide your contact information for inquries.",
        name: "Contact"
    }, {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Username'
    }, {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email'
    }, {
        type: 'input',
        message: 'What the status of this project?',
        name: 'Status'
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err)
        } else {
            console.log("File Created!")
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
        })
}

// Function call to initialize app
init();

// just tesiting new laptop push
