const Intern = require('../lib/Intern');

describe('Intern', () => {
    // Test initialization
    describe('Initialization', () => {
        it(`'Intern' constructor should output correct info`, () => {
            const obj = new Intern('jane', 123, 'example@gmail.com', 'uw');

            expect(obj.name).toEqual('jane');
            expect(obj.id).toEqual(123);
            expect(obj.email).toEqual('example@gmail.com');
            expect(obj.school).toEqual('uw');
        })
    })

    // Test Intern methods
    describe('Intern', () => {
        it(`'getSchool' method should return 'school' input`, () => {
            const obj = new Intern('jane', 123, 'example@gmail.com', 'uw');

            expect(obj.getSchool()).toBe('uw');
        })

        it(`Error if 'school' input is not a string`, () => {
            const testInput = () => new Intern('jane', 123, 'example@gmail.com', 1).getSchool();
            const err = new Error(`'school' input value must be a string value`);
            
            expect(testInput).toThrowError(err);
        })

        it(`Error if 'school' input is empty`, () => {
            const testInput = () => new Intern('jane', 123, 'example@gmail.com', '').getSchool();
            const err = new Error(`'school' input value must be a string value`);
            
            expect(testInput).toThrowError(err);
        })
    })
})