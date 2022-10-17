// const questions = require("./index.js");
const Intern = require("../lib/intern");
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
// let managerEl = document.querySelector("#mangement");
// let engineerEl = document.querySelector("#engineer");
// let internEl = document.getElementById("#intern");

const generateManager = (managerTitle) => {
  return managerTitle
    .map((manager) => {
      return `
    </section>
    <div class="tile is-ancestor p-4">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">${manager.name}</p>
      <p class="subtitle">Manager</p>
      <ul class="content">
        <li>ID: ${manager.id}</li>
        <li>Email:${manager.email}</li>
        <li>Office Number:${manager.office}</li>
      </ul>
    </article>
  </div>`;
    })
    .join("");
};

// Generates intern card
const generateIntern = (internTitle) => {
  return internTitle
    .map((intern) => {
      return `
<div class="tile is-ancestor p-2">
    <div class="tile">
      <div class="tile is-parent ">
        <article class="tile is-child box">
      <p class="title">${intern.name}</p>
      <p class="subtitle">intern</p>
   <ul class="content">
        <li>ID: ${intern.id}</li>
        <li>Email:${intern.email}</li>
        <li>Education:${intern.education}</li>
      </ul>
    </article>`;
    })
    .join("");
};

// Generates engineer card
const generateEngineer = (engineerTitle) => {
  return engineerTitle
    .map((engineer) => {
      return `
  <div class="tile is-parent">
    <article class="tile is-child box">

      <p class="title">${engineer.name}</p>
      <p class="subtitle">Engineer</p>
      <ul class="content">
        <li>ID: ${engineer.id}</li>
        <li>Email:${engineer.email}</li>
        <li>Github:${engineer.github}</li>
      </ul>
    </article>`;
    })
    .join("");
};

const renderHTML = (devTeamArray) => {
  let devArray = [];
  const managerTitle = devTeamArray.filter((team) => {
    return team.getRole() === "Manager";
  });
  const engineerTitle = devTeamArray.filter((team) => {
    return team.getRole() === "Engineer";
  });
  const internTitle = devTeamArray.filter((team) => {
    return team.getRole() === "Intern";
  });
  if (managerTitle) {
    devArray.push(generateManager(managerTitle));
  }
  if (engineerTitle) {
    devArray.push(generateEngineer(engineerTitle));
  }
  if (internTitle) {
    devArray.push(generateIntern(internTitle));
  }
  return devArray.join("");
};

// Generates HTML Page
module.exports = (devArray) => {
  return ` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./assests/style/style.css" />
    <title>Teams</title>
  </head>


  <body>

    <section class="hero is-link" >
    <div class="hero-body container"> 
      <div class="title">
        <h1>The Dev Team</h1>
      </div>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main class="container my-5">
        <div class="row">
            ${renderHTML(devArray)}
        </div>
    </main>
</body>
</html>
    `;
};
