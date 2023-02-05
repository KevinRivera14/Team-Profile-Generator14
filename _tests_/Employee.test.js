const Employee = require("../lib/Employee");

describe('Instantiate Employee instance', () => {
    it('Should instantiate new Employee', () => {
        const emp = new Employee()
        expect(typeof (emp)).toBe('object')
    });
})

describe('Can set name trough constructor', () => {
    it('Setting name trough constructor', () => {
        const val = 'Sarah'
        const emp = new Employee(val)
        expect(emp.name).toBe(val)
    });
})

describe('Can set id trough constructor', () => {
    it('Setting id trough constructor', () => {
        const val = 123
        const emp = new Employee('Sarah', val)
        expect(emp.id).toBe(val)
    });
})

describe('Can set email trough constructor', () => {
    it('Setting email trough constructor', () => {
        const val = 'sarah@example.com'
        const emp = new Employee('Sarah', 123, val)
        expect(emp.email).toBe(val)
    });
})

describe('Can get name trough getName()', () => {
    it('Getting name trough getName()', () => {
        const emp = new Employee('Sarah', 123, 'sarah@example.com')
        expect(emp.getName()).toBe('Sarah')
    });
})

describe('Can get id trough getId()', () => {
    it('Getting id trough getId()', () => {
        const emp = new Employee('Sarah', 123, 'sarah@example.com')
        expect(emp.getId()).toBe(123)
    });
})

describe('Can get email trough getEmail()', () => {
    it('Getting email trough getEmail()', () => {
        const emp = new Employee('Sarah', 123, 'sarah@example.com')
        expect(emp.getEmail()).toBe('sarah@example.com')
    });
})

describe('Can get role trough getRole()', () => {
    it('Getting role trough getRole()', () => {
        const emp = new Employee('Sarah', 123, 'sarah@example.com')
        expect(emp.getRole()).toBe('Employee')
    });
})