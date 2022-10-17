const fs = require("fs");
const inquirer = require("inquirer");
const renderHTML = require("./src/generateHTML");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

class Prompt {
  constructor() {
    this.devTeam = [];
  }

  getDevTeam() {
    return this.devTeam;
  }

  // Questions
  questions() {
    inquirer
      .prompt({
        type: "list",
        name: "employeeType",
        message: "Which type of employee would you like to add to the team?",
        choices: ["Manager", "Engineer", "Intern", "Confirm Dev Team"],
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
            .then((devData) => {
              const newManager = new Manager(
                devData.name,
                devData.id,
                devData.email,
                devData.office
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
            ])
            .then((devData) => {
              const newEngineer = new Engineer(
                devData.name,
                devData.id,
                devData.email,
                devData.github
              );
              this.devTeam.push(newEngineer);
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
            ])
            .then((devData) => {
              const newIntern = new Intern(
                devData.name,
                devData.id,
                devData.email,
                devData.school
              );
              this.devTeam.push(newIntern);
              this.questions();
            });
        } else if (employeeType === "Confirm Dev Team") {
          const pagehtml = renderHTML(this.getDevTeam());
          fs.writeFile("./dist/index.html", pagehtml, (err) => {
            if (err) throw new Error(err);

            console.log(
              "Check out the new team profile in the ./dist folder! good looking team"
            );
          });
        }
      });
  }
}

const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;
