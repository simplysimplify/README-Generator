const fs = require('fs');
const inquirer = require('inquirer');


// Sets a variable for the inquirer guy to access when called. Wish I could take credit for the idea but honestly it's too smart to be my own idea. It's so good I almost resent my teachers for not telling us this is the intended way of using the library cause it definitely feels like it is.
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

// Calls the inquirer guy to assess the variable above and creates an array based on the data parsed from the responses.
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
	createREADME()
})

function createREADME() {
	// Creates README boilerplate for the employee cards to be put on (provided there isnt already one).
	console.log("Building README.md")
	let rmText = `
Creator/Colaborators: ${Name}
## Table of Contents


* [Description](#description)
* [Installation](#install)
* [Usage](#usage)
* [Tests](#tests)


## Description:
${Description}




## Install:
${Install}




## Usage:
${Usage}




## Tests:
${Tests}




## Liscences:
${Liscences}





`
	fs.appendFile('README.md', rmText, (err) =>
	err ? console.error(err) : console.log('File written'))
}