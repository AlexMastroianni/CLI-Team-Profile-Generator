const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHtmlPage");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

class Prompt {
  constructor() {
    this.devTeam = [];
  }

  getdevTeam() {
    return this.devTeam;
  }

  // Questions
  questions() {
    inquirer
      .prompt({
        type: "list",
        name: "employeeType",
        message: "Which type of employee would you like to add to the team?",
        choices: ["Manager", "Engineer", "Intern", "Confirm"],
      })
      .then(({ employeeType }) => {
        if (employeeType === "Manager") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Please add the manager's name",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Error! No name has been entered");
                    return false;
                  }
                },
              },
              {
                type: "number",
                name: "id",
                message: "Please add employees ID",
                validate: (idInput) => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log("Error! No ID has been entered!");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "email",
                message: "Please add the employees email address",
                validate: (emailInput) => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log("Error! No email has been entered!");
                    return false;
                  }
                },
              },
              {
                type: "number",
                name: "office",
                message: "Please enter the employees office number",
                validate: (officeNumberInput) => {
                  if (officeNumberInput) {
                    return true;
                  } else {
                    console.log("Error! No office number has been entered!");
                    return false;
                  }
                },
              },
            ])

            // Pushes Manager data into devTeam
            .then((templateData) => {
              const newManager = new Manager(
                templateData.name,
                templateData.id,
                templateData.email,
                templateData.office
              );
              this.devTeam.push(newManager);
              this.questions();
            });
        } else if (employeeType === "Engineer") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Please add the engineer's name",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Error! No name has been entered");
                    return false;
                  }
                },
              },
              {
                type: "number",
                name: "id",
                message: "Please add employees ID",
                validate: (idInput) => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log("Error! No ID has been entered");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "email",
                message: "Please add employees email address",
                validate: (emailInput) => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log("Error! No email has been entered");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "github",
                message: "Please add employees github username",
                validate: (githubInput) => {
                  if (githubInput) {
                    return true;
                  } else {
                    console.log("Error! No email has been entered");
                    return false;
                  }
                },
              },

              // Pushes Engineer data into devTeam
            ])
            .then((templateData) => {
              const newEngineer = new Engineer(
                templateData.name,
                templateData.id,
                templateData.email,
                templateData.github
              );
              this.devTeam.push(newEngineer);
              // Sends user back to menu
              this.questions();
            });
        } else if (employeeType === "Intern") {
          inquirer
            .prompt([
              {
                type: "input",
                name: "name",
                message: "Please add intern's name",
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Error! No name has been entered");
                    return false;
                  }
                },
              },
              {
                type: "number",
                name: "id",
                message: "Please add employees ID",
                validate: (idInput) => {
                  if (idInput) {
                    return true;
                  } else {
                    console.log("Error! No ID has been entered");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "email",
                message: "Please add employees email address",
                validate: (emailInput) => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log("Error! No email has been entered");
                    return false;
                  }
                },
              },
              {
                type: "input",
                name: "education",
                message: "Please add employees education",
                validate: (schoolInput) => {
                  if (schoolInput) {
                    return true;
                  } else {
                    console.log("Error! No edutcation has been entered");
                    return false;
                  }
                },
              },

              // Pushes Intern data into devTeam
            ])
            .then((templateData) => {
              const newIntern = new Intern(
                templateData.name,
                templateData.id,
                templateData.email,
                templateData.education
              );
              this.teamArray.push(newIntern);
              // Sends user back to menu
              this.questions();
            });
        } else if (employeeType === "I finished entering my team info") {
          //function that writes the html file in the dist folder
          const pagehtml = generateHTML(this.getTeamArray());
          fs.writeFile("./dist/index.html", pagehtml, (err) => {
            if (err) throw new Error(err);

            console.log(
              "Page created! Check out index.html in the dist/ folder to see it!"
            );
          });
        }
      });
  }
}

const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;
