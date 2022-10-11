const Intern = require("../lib/Intern");
describe("Intern", () => {
  describe("Object", () => {
    test("creates an Intern object", () => {
      const intern = new Intern("Jonny D", 111, "JohnDoe@fake.com", "USYD");

      expect(intern.school).toEqual(expect.any(String));
    });
  });

  describe("Education", () => {
    test("gets employee Education", () => {
      const intern = new Intern("Jonny D", 123, "JohnDoe@fake.com", "USDY");

      expect(intern.getEducation()).toEqual;
      expect.stringContaining(intern.getEducation.toString());
    });
  });

  describe("Role", () => {
    test("gets role of employee", () => {
      const intern = new Intern("Jonny D", 111, "JohnDoe@fake.com", "USYD");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
