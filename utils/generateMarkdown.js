const emailCheck = email=> email ? email : "This user does not have a public email address."
function generateMarkdown(data) {
 //console.log(data)
 data.license= encodeURI(data.license)
  return `
# ${data.title}  

  
## Description  
${data.description}  

## Table of Contents  

* [Installation](#installation)  
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installation  
Command to Install:

      ${data.installation}

## Usage
${data.usage}

## License  
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Contributors
${data.contributors}

## Tests
      ${data.tests}

## Questions
If you have any questions, please contact the GitHub user.

<img src="${data.avatar_url}">  

Email: ${emailCheck(data.email)}

`;
}

module.exports = generateMarkdown;
