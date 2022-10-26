const Employee = require('./Employee');

// Define Engineer class which is extended by the Employee parent
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        if (typeof this.github !== "string" || !this.github.trim().length) {
            throw new Error(`'github' input value must be a string input`);
        } 
        return this.github; 
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;