// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer');
const generate = require("./util/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the Title of your project'

    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your project'

    },
    {
        type: 'input',
        name: 'Contents',
        message: 'Table of Contents'

    },
    {
        type: 'confirm',
        name: 'Contributers',
        message: 'Were there any contributors to this project?'

    },
    {
        type: 'input',
        name: 'Instructions',
        message: 'What were the Instructions for this assignment'

    },
    {
        type: 'choice',
        name: 'License',
        message: 'What license did you use',
        choice: [('MIT', 'ISC', 'LIT')]

    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github Username',

    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email'

    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(error){
        console.log(fileName)
        console.log(data)
        //if not consoloen log to be error
        if(error) {
            return crossOriginIsolated.log(error)
        }else {
            console.log("Readme Sucessfully Generated!")
        }
    })
}


// TODO: Create a function to initialize app
//run the questons and then post to readme file.
function runprompt() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generate(data));
                console.log(data)
        })
}

// Function call to initialize app
//simply run the code 
runprompt();
