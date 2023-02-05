const Manager = require('../lib/Manager')

describe('Can set Office number trough constructor', () => {
    it('Setting Office number trough constructor', () => {
        const val = '123456789'
        const emp = new Manager('Steve', 225, 'alex@example.com', val)
        expect(emp.officeNumber).toBe(val)
    });
})

describe('Can get Office number trough getOfficeNumber()', () => {
    it('Getting Office number trough getOfficeNumber()', () => {
        const emp = new Manager('Steve', 225, 'alex@example.com', '123456789')
        expect(emp.getOfficeNumber()).toBe('123456789')
    });
})

describe('Can get role trough getRole()', () => {
    it('Getting role trough getRole()', () => {
        const emp = new Manager('Steve', 225, 'alex@example.com')
        expect(emp.getRole()).toBe('Manager')
    });
})