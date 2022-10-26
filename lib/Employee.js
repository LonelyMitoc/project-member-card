// Define the 'Employee' parent class to have a constructor to use in the children
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Check the name input is a string or that the input length is not less than 0
    getName() {
        if (typeof this.name !== "string" || !this.name.trim().length) {
            throw new Error(`'name' input value must be a string value` );
        }
        return this.name;
    }

    // Check the id input is a positive number
    getId() {
        if (typeof this.id !== "number" || isNaN(this.id) || this.id < 0) {
            throw new Error(`'id' input value must be a positive number`);
        }
        return this.id;
    }

    // Check the email input is string or that the input length is not less than 0
    getEmail() {
        if (typeof this.email !== "string" || !this.email.trim().length) {
            throw new Error(`'email' input value must be a string value`);
        }
        return this.email;
    }

    // To input the role into the HTML in index.js
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;