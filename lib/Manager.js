const Employee = require('./Employee');

// Define Manager class which is extended by the Employee parent
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOffice() {
        if (typeof this.officeNumber !== "number" || isNaN(this.officeNumber) || this.officeNumber < 0) {
            throw new Error(`'office number' input value must be a positive number`);
        }
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;