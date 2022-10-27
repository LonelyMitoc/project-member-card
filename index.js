// Import packages and classes from lib
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Initial question on the team manager
const initQuestions = [
    {
        type: 'input',
        message: `What is your team manager's name?`,
        name: 'name'
    },
    {
        type: 'number',
        message: `What is your team manager's employee ID#?`,
        name: 'id'
    },
    {
        type: 'input',
        message: `What is your team manager's email address?`,
        name: 'email'
    },
    {
        type: 'number',
        message: `What is your team manager's office number?`,
        name: 'officeNumber'
    },
    {
        type: 'list',
        message: `Who else besides the team manager is on your team?`,
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team'],
        name: 'employeeClass'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: `what is the name of the engineer?`,
        name: 'name'
    },
    {
        type: 'number',
        message: `What is the engineer's employee ID#?`,
        name: 'id'
    },
    {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'email'
    },
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'github'
    },
    {
        type: 'list',
        message: `Who else do you want to add to the team?`,
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team'],
        name: 'employeeClass'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: `what is the name of the intern?`,
        name: 'name'
    },
    {
        type: 'number',
        message: `What is the intern's employee ID#?`,
        name: 'id'
    },
    {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'email'
    },
    {
        type: 'input',
        message: `What school does/did the intern go to?`,
        name: 'school'
    },
    {
        type: 'list',
        message: `Who else do you want to add to the team?`,
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team'],
        name: 'employeeClass'
    }
]

// Set a global variable for the manager and an array for the employees to be added later
let manager;
const employeeArr = [];

// Functions to take the responses and set for the manager and push the Engineer and Intern objects to the set array
function managerInfo(response) {
    manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    return response.employeeClass;
};

function pushEngineerInfo(response) {
    employeeArr.push(new Engineer(response.name, response.id, response.email, response.github));
    return response.employeeClass;
}

function pushInternInfo(response) {
    employeeArr.push(new Intern(response.name, response.id, response.email, response.school));
    return response.employeeClass;
}

// Method to check the choices made in the last question for additional employee info generation
function generateTeam(choice) {

    if (choice !== 'Finish building my team') {
        if (choice === 'Add an Engineer') {
            inquirer
                .prompt(engineerQuestions)
                .then(pushEngineerInfo)
                .then(generateTeam)
        }

        if (choice === 'Add an Intern') {
            inquirer
                .prompt(internQuestions)
                .then(pushInternInfo)
                .then(generateTeam)
        }
    } else {
        return writeHTML();
    }
};

// Generate HTML based on the user's input (here the manager inputs are shown and employee info in a later function)
// Styled in bootstrap
function generateHTML(manager, employeeArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body class="bg-secondary">
        <header class="w-100 bg-dark p-5">
            <h1 class="text-warning text-center fw-bold">My Team &#9749</h1>
        </header>
        <div class="container-sm" style="max-width: 1200px;">
            <div class="row justify-content-evenly">
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card mx-auto mt-3 shadow">
                        <div class="card-body bg-warning">
                        <h5 class="card-title fw-bold">${manager.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">&#128273 ${manager.getRole()}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
                        </ul>

                    </div>
                </div>
                ${generateEmployeeHTML(employeeArr)}
            </div>
        </div>
    </body>
    </html>`
};

// Generate the employee info in HTML format
function generateEmployeeHTML(employeeArr) {
    let employeeHtmlArr = [];

    if (employeeArr.length > 0) {
        for (let i = 0; i < employeeArr.length; i++) {
            let icon = '';
            let color = '';
            let gitOrSchool = '';
            
            if (employeeArr[i].getRole() === 'Engineer') {
                icon = `&#128187`;
                color = `info`
                gitOrSchool = `GitHub: <a href="https://github.com/${employeeArr[i].getGithub()}">${employeeArr[i].getGithub()}</a>`;
            } else {
                icon = `&#127891`;
                color = `light`
                gitOrSchool = `School: ${employeeArr[i].getSchool()}`;
            }

            let html = `
            <div class="col-12 col-md-6 col-xl-4">
                    <div class="card mx-auto mt-3 shadow">
                        <div class="card-body bg-${color}">
                        <h5 class="card-title fw-bold">${employeeArr[i].getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${icon} ${employeeArr[i].getRole()}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employeeArr[i].getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeArr[i].getEmail()}">${employeeArr[i].getEmail()}</a></li>
                            <li class="list-group-item">${gitOrSchool}</li>
                        </ul>
                    </div>
                </div>
            `;
            employeeHtmlArr.push(html);
        }
        return employeeHtmlArr.join('');

    } else {
        return '';
    }
};

// Method to generate the HTML file into the ./dist directory
function writeHTML() {
    const body = generateHTML(manager, employeeArr);

    fs.writeFile('./dist/index.html', body, (err) =>
    err ? console.error(err) : console.log('HTML Generated!'))
};

// Function to initiate the app
function init() {
    inquirer
        .prompt(initQuestions)
        .then(managerInfo)
        .then(generateTeam)
};

init();