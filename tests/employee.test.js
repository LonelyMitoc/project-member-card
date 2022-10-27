const Employee = require('../lib/Employee');

// Test Employee constructor
describe('Employee', () => {
    describe('Initialization', () => {
        it(`Employee constructor should populate the 'name', 'id', 'email' value when passed through the 'new' method`, () => {
            const obj = new Employee('jane', 123, 'example@gmail.com');

            expect(obj.name).toEqual('jane');
            expect(obj.id).toEqual(123);
            expect(obj.email).toEqual('example@gmail.com');
        })
    })

    // Testing each 'get' method in the constructor for the correct inputs
    describe('Correct Input', () => {
        it(`getName method should return 'name' input`, () => {
            const obj = new Employee('jane', 123, 'example@gmail.com');

            expect(obj.getName()).toBe('jane');
        })

        it(`getId method should return 'id' input`, () => {
            const obj = new Employee('jane', 123, 'example@gmail.com');

            expect(obj.getId()).toBe(123);
        })

        it(`getEmail method should return 'email' input`, () => {
            const obj = new Employee('jane', 123, 'example@gmail.com');

            expect(obj.getId()).toBe(123);
        })

        it(`getRole method should return 'Employee'`, () => {
            const obj = new Employee('jane', 123, 'example@gmail.com');

            expect(obj.getRole()).toBe('Employee');
        })
    })

    // Testing each incorrect input
    describe('Incorrect Input'), () => {
        // For getName
        it(`Error if 'name' input is not a string`, () => {

            const testInput = () => new Employee(1, 123, 'example@gmail.com').getName();
            const err = new Error(`'name' input value must be a string value`);
            
            expect(testInput).toThrowError(err);
        })

        it(`Error if 'name' input is empty`, () => {

            const testInput = () => new Employee('', 123, 'example@gmail.com').getName();
            const err = new Error(`'name' input value must be a string value`);
            
            expect(testInput).toThrowError(err);
        })

        //For getId
        it(`Error if 'id' input is not a number`, () => {

            const testInput = () => new Employee('jane', '123', 'example@gmail.com').getId();
            const err = new Error(`'id' input value must be a positive number`);
            
            expect(testInput).toThrowError(err);
        })

        it(`Error if 'id' input is a negative number`, () => {

            const testInput = () => new Employee('jane', -987, 'example@gmail.com').getId();
            const err = new Error(`'id' input value must be a positive number`);
            
            expect(testInput).toThrowError(err);
        })

        //For getEmail
        it(`Error if 'email' input is not a string`, () => {

            const testInput = () => new Employee('jane', 123, 456).getEmail();
            const err = new Error(`'email' input value must be a string value`);
            
            expect(testInput).toThrowError(err);
        })

        it(`Error if 'email' input is empty`, () => {

            const testInput = () => new Employee('jane', 123, '').getEmail();
            const err = new Error(`'email' input value must be a string value`);
            
            expect(testInput).toThrowError(err);
        })
    }
})