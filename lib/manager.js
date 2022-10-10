const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.office = office;
  }

  getOfficeNumber() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
