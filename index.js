const api = require("./utils/api")
const generateMarkdown = require("./utils/generateMarkdown")

function init() {
    var inquirer = require("inquirer");
    var fs = require('fs');
    
    inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
      },
      {
        type: "input",
        name: "installation",
        message: "What command is needed to install this application?"
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know to use this repository?"
      },
      {
        type: "list",
        message: "How is your project licensed?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
      },
      {
        type: "input",
        name: "contributors",
        message: "List any of your collaborators."
      },
      {
        type: "input",
        name: "tests",
        message: "What command is needed to test this application?"
      }

    ]).then(function(results) {
        api.getUser(results.username).then(({data})=>{
              fs.writeFile('README.md', generateMarkdown({...data, ...results}), function(err) {
            
                if (err) {
                  return console.log(err);
                }
            
                console.log("Success!");
            
              });

        })
    
    });
}

init();

