const Engineer = require("../lib/engineer");

describe("GitHub", () => {
  test("gets engineer github value", () => {
    const engineer = new Engineer(
      "Jonny D",
      111,
      "JohnDoe@fake.com",
      "JohnDoe99"
    );

    expect(engineer.getGitHub()).toEqual;
    expect.stringContaining(engineer.github.toString());
  });
});

describe("Engineer", () => {
  describe("Object", () => {
    test("creates an Engineer object", () => {
      const engineer = new Engineer(
        "Jonny D",
        111,
        "JohnDoe@fake.com",
        "JohnDoe99"
      );

      expect(engineer.github).toEqual(expect.any(String));
    });
  });

  describe("Role", () => {
    test("gets role of employee", () => {
      const engineer = new Engineer(
        "Jonny D",
        111,
        "JohnDoe@fake.com",
        "JohnDoe99"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
