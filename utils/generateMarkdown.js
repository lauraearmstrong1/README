function generateMarkdown(data) {
  //console.log(data)
  return `
# ${data.title}  

  
## Description  

## Table of Contents  

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation  
  
## Usage

## Credits

## License
![License Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)  

`;
}

module.exports = generateMarkdown;
