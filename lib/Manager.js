const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, idd, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOffice() {
        if (typeof this.officeNumber !== "number" || isNaN(this.officeNumber) || this.officeNumber <0) {
            throw new Error(`'office number' input value must be a positive number`);
        }
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;