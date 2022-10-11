const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Object", () => {
    test("creates an employee object", () => {
      const employee = new Employee("Jonny D", 111, "JohnDoe@fake.com");
      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });

  describe("Name", () => {
    test("gets employee name", () => {
      const employee = new Employee(
        "Jonny D",
        111,
        "JohnDoe@fake.com",
        "JohnDoe99"
      );

      expect(employee.getName()).toEqual(expect.any(String));
    });
  });

  // Gets id from getID
  describe("ID", () => {
    test("gets employee ID", () => {
      const employee = new Employee(
        "Jonny D",
        111,
        "JohnDoe@fake.com",
        "JohnDoe99"
      );

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  });

  describe("Email", () => {
    test("gets employee email", () => {
      const employee = new Employee(
        "Jonny D",
        111,
        "JohnDoe@fake.com",
        "JohnDoe99"
      );

      expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
      );
    });
  });

  describe("Role", () => {
    test("gets role of employee", () => {
      const employee = new Employee(
        "Jonny D",
        111,
        "JohnDoe@fake.com",
        "JohnDoe99"
      );

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
