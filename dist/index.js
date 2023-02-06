const inquirer = require('inquirer');
const fs = require('fs');
const team = [];
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML');

const managerPrompts = () => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What is the new Manager name?',
			},
			{
				type: 'input',
				name: 'id',
				message: 'What is the new Manager id?',
			},
			{
				type: 'input',
				name: 'email',
				message: 'What is the new Manager email?',
			},
			{
				type: 'input',
				name: 'officeNumber',
				message: 'What is the new Manager office number going to be ?',
			},
		])
		.then(answers => {
			const manager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.officeNumber
			);
			team.push(manager);
			teamPrompts();
		});
};
const empPrompts = role => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'What is the new Employee name?',
			},
			{
				type: 'input',
				name: 'id',
				message: 'What is the new Employee id?',
			},
			{
				type: 'input',
				name: 'email',
				message: 'What is the new Employee email?',
			},
		])
		.then(answers => {
			role === 'Intern' ? internPrompts(answers) : engineerPrompts(answers);
		});
};
const internPrompts = info => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'school',
				message: 'What is the new Intern school?',
			},
		])
		.then(answers => {
			const emp = new Intern(info.name, info.id, info.email, answers.school);
			team.push(emp);
			teamPrompts();
		});
};
const engineerPrompts = info => {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'github',
				message: 'What is the new Engineer github?',
			},
		])
		.then(answers => {
			const emp = new Engineer(info.name, info.id, info.email, answers.github);
			team.push(emp);
			teamPrompts();
		});
};
const teamPrompts = () => {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'role',
				choices: ['Intern', 'Engineer', 'Done'],
				message: 'Who would you like to add to the team?',
			},
		])
		.then(answers => {
			answers.role === 'Done' ? generateTeam() : empPrompts(answers.role);
		});
};
const generateTeam = () => {
	fs.writeFileSync(
		'dist/index.html',
		generateHTML(team),
		err => err && console.log(err)
	);
	console.log(team);
};
managerPrompts();