const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, education) {
    super(name, id, email);
    this.education = education;
  }
  getEducation() {
    return this.education;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
