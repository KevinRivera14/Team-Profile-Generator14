const Intern = require('../lib/Intern')

describe('Can set School trough constructor', () => {
    it('Setting School trough constructor', () => {
        const val = 'MonsterHigh'
        const emp = new Intern('Alex', 225, 'alex@example.com', val)
        expect(emp.school).toBe(val)
    });
})

describe('Can get school trough getSchool()', () => {
    it('Getting school trough getSchool()', () => {
        const emp = new Intern('Alex', 225, 'alex@example.com', 'MonsterHigh')
        expect(emp.getSchool()).toBe('MonsterHigh')
    });
})

describe('Can get role trough getRole()', () => {
    it('Getting role trough getRole()', () => {
        const emp = new Intern('Alex', 225, 'alex@example.com')
        expect(emp.getRole()).toBe('Intern')
    });
})