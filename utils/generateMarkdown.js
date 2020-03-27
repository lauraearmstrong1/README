function generateProject(github, title) {
  const entertitle = title.toLowerCase().split(' ').join('-');
  return `https://github.com/${github}/${entertitle}`
}


function renderBadge(license, github, title) {
if(license !== "none") {
  return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)(${generateProject(github,title)})`
}
  return ""
}


function renderLicense(license) {
  if(license !== "none") {
    `## License
    This licnese is: ${license}`
  }
}

function generateMarkdown(data) {
 //console.log(data)
  return `
# ${data.title}  
${renderBadge(data.license, data.github, data.title)}
  
## Description  
${data.description}

## Table of Contents  

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation  
To install the necessary dependencies, run this command: ${data.installation}
  
## Usage
${data.usage}
${renderLicense(data.license)}


## Credits
<img src="${data.avatar_url}">
${data.email}

`;
}

module.exports = generateMarkdown;
