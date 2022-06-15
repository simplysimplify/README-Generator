const fs = require('fs');
const inquirer = require('inquirer');



const queries = [
	{
		type: "input",
		message: "What is the title/name of this application?",
		name: "name"
	},
	{
		type: "input",
		message: "What is the name of your GitHub?",
		name: "github"
	},
	{
		type: "input",
		message: "What is your email?",
		name: "email"
	},
	{
		type: "input",
		message: "Give a short explaination of the applications function.",
		name: "description"
	},
	{
		type: "input",
		message: "Explain, breifly, how to install the given application.",
		name: "install"
	},
	{
		type: "input",
		message: "Explain, breifly, how to use the given application",
		name: "usage"
	},
	{
		type: "input",
		message: "Please list the liscences used to create the given application.",
		name: "liscences"
	},
	{
		type: "input",
		message: "Please list the test(s) used in/on this application.",
		name: "test"
	},
]


inquirer.prompt(queries).then(response => {
	const READMEdata  = [
		Name = response.name,
		Github = response.github,
		Email = response.email,
		Description = response.description,
		Install = response.install,
		Usage = response.usage,
		Liscences = response.liscences,
		Tests = response.test,
	]
	console.log(READMEdata)
})

