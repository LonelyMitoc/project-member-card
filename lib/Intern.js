const Employee = require('./Employee');

// Define Intern class which is extended by the Employee parent
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        if (typeof this.school !== "string" || !this.school.trim().length) {
            throw new Error(`'school' input value must be a string value`);
        } 
        return this.school; 
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;