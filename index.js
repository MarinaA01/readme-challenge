// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');

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
        message: 'Please attach a link to your Github: '
    }
];

inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
});

// TODO: Create a function to write README file
fs.writeToFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md file has been created!');
})

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt([
        questions
    ])
    .then((answers) => writeToFile('README.md', generateMarkdown(answers)));
    readmeContent;
}

// Function call to initialize app
init();
