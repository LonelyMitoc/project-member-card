const Manager = require('../lib/Manager');

describe('Manager', () => {
    // Test initialization
    describe('Initialization', () => {
        it(`'Manager' constructor should output correct info`, () => {
            const obj = new Manager('jane', 123, 'example@gmail.com', 456);

            expect(obj.name).toEqual('jane');
            expect(obj.id).toEqual(123);
            expect(obj.email).toEqual('example@gmail.com');
            expect(obj.officeNumber).toEqual(456);
        })
    })

    // Test Manager methods
    describe('Manager', () => {
        it(`'getOffice' method should return 'officeNumber' input`, () => {
            const obj = new Engineer('jane', 123, 'example@gmail.com', 456);

            expect(obj.getOffice()).toBe(456);
        })

        it(`Error if 'officeNumber' input is not a number`, () => {
            const testInput = () => new Manager('jane', 123, 'example@gmail.com', '1').getOffice();
            const err = new Error(`'office number' input value must be a positive number`);
            
            expect(testInput).toThrowError(err);
        })

        it(`Error if 'officeNumber' input is a negative number`, () => {
            const testInput = () => new Manager('jane', 123, 'example@gmail.com', -654).getOffice();
            const err = new Error(`'office number' input value must be a positive number`);
            
            expect(testInput).toThrowError(err);
        })
    })
})