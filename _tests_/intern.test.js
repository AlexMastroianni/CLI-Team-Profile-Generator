// Using Intern constructor
const intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Object", () => {
    test("creates an Intern object", () => {
      const intern = new Intern("Jonny D", 111, "JohnDoe@fake.com", "USYD");

      expect(intern.school).toEqual(expect.any(String));
    });
  });

  describe("Role", () => {
    test("gets role of employee", () => {
      const intern = new Intern("Jonny D", 111, "JohnDoe@fake.com", "USYD");

      expect(intern.getRole()).toEqual("Intern");
    });
  });

  describe("School", () => {
    test("gets employee school", () => {
      const intern = new Intern(
        "Janey T.",
        123,
        "janeytiglao@gmail.com",
        "UCI"
      );

      expect(intern.getSchool()).toEqual(
        expect.stringContaining(intern.school.toString())
      );
    });
  });
});
