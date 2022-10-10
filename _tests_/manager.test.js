const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Object", () => {
    test("creates a Manager object", () => {
      const manager = new Manager("John Doe", 111, "JohnDoe@fake.com", 1);

      expect(manager.office).toEqual(expect.any(Number));
    });
  });

  describe("Role", () => {
    test("gets role of employee", () => {
      const manager = new Manager("Jonny D", 111, "JohnDoe@fake.com", 1);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
