// packages needed for application
const  inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions
const questions = [
    {
        type: 'input',
        name: 'title',
        question: 'Enter the title of the application',
    },
    {
        type: 'input',
        name: 'description',
        question: 'Enter the description of the application',
    },
    {
        type: 'input',
        name: 'installation',
        question: 'Enter the installation instructions for the application',
    },
    {
        type: 'input',
        name: 'usage',
        question: 'Enter the usage instructions for the application',
    },
    {
        type: 'input',
        name: 'contribution',
        question: 'Enter the contribution guidelines for the application',
    },
    {
        type: 'input',
        name: 'testing',
        question: 'Enter the testing instructions for the application',
    },
    {
        type: 'input',
        name: 'username',
        question: 'Enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        question: 'Enter your email address',
    },
    {
        type: 'list',
        name: 'license',
        question: 'Choose a license for your application',
        choices: ['MIT', 'Apache', 'GPL', 'MPL', 'none']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        console.log(answer);
        writeToFile('./generatedREADME.md', generateMarkdown(answer))
    });
}

// Function call to initialize app
init();
