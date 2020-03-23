function generateMarkdown(data) {
  //console.log(data)
  return `
# ${data.title}  
![License Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)  
  
## Description  

## Table of Contents  

* [Installation](#installation)
* [Usage](#usage)

## Installation  
  
## Usage

`;
}

module.exports = generateMarkdown;
