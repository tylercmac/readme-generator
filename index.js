// Packages needed for this application
const inquirer = require('inquirer')
const {generateMarkdown} = require('./generateMarkdown')
const fs = require('fs');
const Prompt = require('inquirer/lib/prompts/base');

// An object for my prompt questions
function PromptQ(type, message, name) {
    this.type = type,
    this.message = message,
    this.name = name
}

// My array of questions for user input
const questions = [
    new PromptQ('input', 'What is your project title?', 'title'),
    new PromptQ('input', 'What is your project description?', 'description'),
    new PromptQ('input', 'Give an example of this usage in JS', 'usage',),
    new PromptQ('input', 'How would you like people to contribute?', 'contribute'),
    new PromptQ('input', 'What is a test for the user to run?', 'tests'),
    {
        type: 'list',
        message: 'Which license do you want?',
        choices: [
            'BSD',
            'MIT',
            'GPL'
        ],
        name: 'license'
    },
    new PromptQ('input', 'What is your GitHub username?', 'github'),
    new PromptQ('input', 'What is your email?', 'email'),


];

// This function writes the README file using fs and the generateMarkdown function.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            throw err
        }
    })
}

// This function initilizes the process, using asynch through inquirer.
function init() {
    // use inquirer
    inquirer
    .prompt(questions)
    // get answers object
    .then((answers) =>
        // write object to readme file
        writeToFile('README.md', answers)
        

    );
}

// Function call to initialize app
init();
