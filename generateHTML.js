const manager = require("../lib/manager");
const intern = require("../lib/intern");
const engineer = require("../lib/mngineer");
const Prompt = require("index.js");
const managerEl = document.getElementById("mangement");
const engineerEl = document.getElementById("engineer");
const internEl = document.getElementById("intern");

//filters
const generateHTML = (devArray) => {
  let devArray = [];
  const managerTitle = devArray.filter((team) => {
    return team.getRole() === "Manager";
  });
  const engineerTitle = devArray.filter((team) => {
    return team.getRole() === "Engineer";
  });
  const internTitle = devArray.filter((team) => {
    return team.getRole() === "Intern";
  });
  if (managerTitle) {
    devArray.push(generateManger(managerTitle));
  }
  if (engineerTitle) {
    devArray.push(generateEng(engineerTitle));
  }
  if (internTitle) {
    devArray.push(generateIntern(internTitle));
  }
  return devArray.join("");
};
//HTML

// var renderListing = function (listing) {
//   var listingEl = $("<div>").addClass("tile is-parent").html(

let generateManger = (managerTitle) => {
  return managerTitle.map((manager) => {
    managerEl = $("<div>").addClass("tile is-parent").html(`
    </section>
    <div class="tile is-ancestor p-4">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">${templateData.name}</p>
      <p class="subtitle">Manager</p>
      <ul class="content">
        <li>ID: ${templateData.id}</li>
        <li>Email:${templateData.email}</li>
        <li>Office Number:${templateData.office}</li>
      </ul>
    </article>
  </div>`);
  });
};

let generateEng = (engTitle) => {
  return engTitle.map((engineer) => {
    engineerEl = $("<div>").addClass("tile is-parent").html(`
  <div class="tile is-parent">
    <article class="tile is-child box">

      <p class="title">${templateData.name}</p>
      <p class="subtitle">Engineer</p>
      <ul class="content">
        <li>ID: ${templateData.id}</li>
        <li>Email:${templateData.email}</li>
        <li>Github:${templateData.github}</li>
      </ul>
    </article>`);
  });
};

let generateIntern = (internTitle) => {
  return internTitle.map((intern) => {
    internEl = $("<div>").addClass("tile is-parent").html(`
<div class="tile is-ancestor p-2">
    <div class="tile">
      <div class="tile is-parent ">
        <article class="tile is-child box">
      <p class="title">Sally</p>
      <p class="subtitle">intern</p>
   <ul class="content">
        <li>ID: ${templateData.id}</li>
        <li>Email:${templateData.email}</li>
        <li>Education:${templateData.education}</li>
      </ul>
    </article>`);
  });
};
