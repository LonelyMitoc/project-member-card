const { exportAllDeclaration } = require('@babel/types');
const { it } = require('node:test');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it(`Employee constructor should populate the 'name', 'id', 'email' value when passed through the 'new' method`, () => {
            const obj = new Employee('jane', 123, 'example@gmail.com');

            expect(obj.name).toEqual('jane');
            expect(obj.id).toEqual(123);
            expect(obj.email).toEqual('example@gmail.com');
        })
    })

    describe('getName', () => {
        it(`getName method should return 'name' input`, () => {
            const obj = new Employee('jane', 123, 'example@gmail.com');

            expect(obj.getName()).toBe('jane');
        })

        it(``)
    })
})