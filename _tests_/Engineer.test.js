const Engineer = require('../lib/Engineer')

describe('Can set GitHub trough constructor', () => {
    it('Setting GitHub trough constructor', () => {
        const val = 'sarah123'
        const emp = new Engineer('Sarah', 123, 'sarah@example.com', val)
        expect(emp.github).toBe(val)
    });
})

describe('Can get github trough getGitHub()', () => {
    it('Getting github trough getGitHub()', () => {
        const emp = new Engineer('Sarah', 123, 'sarah@example.com', 'sarah123')
        expect(emp.getGitHub()).toBe('sarah123')
    });
})

describe('Can get role trough getRole()', () => {
    it('Getting role trough getRole()', () => {
        const emp = new Engineer('Sarah', 123, 'sarah@example.com')
        expect(emp.getRole()).toBe('Engineer')
    });
})