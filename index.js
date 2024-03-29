// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for this project: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'GNU', 'Apache'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Did you run tests?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email: '
    },
];

// TODO: Create a function to write README file
// Help from Ask BCS learning Assistants

function writeFile(fileName, generateMarkdown, err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('README.md file has been created!')
    fs.writeFile('README.md', generateMarkdown, (err) => {
        if (err) throw err;
        console.log('README.md file has been created!');
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions).then((answers) => writeFile('README.md', generateMarkdown(answers)));
}

// Function call to initialize app
init();
