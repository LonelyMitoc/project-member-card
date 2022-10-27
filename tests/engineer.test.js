const Engineer = require('../lib/Engineer');

// Test Engineer constructors
describe('Engineer', () => {
    // Test initialization
    describe('Initialization', () => {
        it(`'Engineer' constructor should output correct info`, () => {
            const obj = new Engineer('jane', 123, 'example@gmail.com', 'janeGit');

            expect(obj.name).toEqual('jane');
            expect(obj.id).toEqual(123);
            expect(obj.email).toEqual('example@gmail.com');
            expect(obj.github).toEqual('janeGit');
        })
    })

    // Test Engineer methods
    describe('Engineer', () => {
        it(`'getGithub' method should return 'github' input`, () => {
            const obj = new Engineer('jane', 123, 'example@gmail.com', 'janeGit');

            expect(obj.getGithub()).toBe('janeGit');
        })

        it(`Error if 'github' input is not a string`, () => {
            const testInput = () => new Engineer(1, 123, 'example@gmail.com', 1).getGithub();
            const err = new Error(`'github' input value must be a string input`);
            
            expect(testInput).toThrowError(err);
        })

        it(`Error if 'github' input is empty`, () => {
            const testInput = () => new Engineer(1, 123, 'example@gmail.com', '').getGithub();
            const err = new Error(`'github' input value must be a string input`);
            
            expect(testInput).toThrowError(err);
        })
    })
})