# week-10-challenge - Team Profile Generator




# This weeks challenge

### Overview

This project is a CLI team profile generator.

### Function

#### Team Profile Generator

Once the user has followed the installation guide, they will be prompted with a few question eg role, name, email ect. Once the user has confirmed the infomation a html page is rendered displaying the infomation in a clean way.


#### Tech

-HTML
-CSS
-JavaScript
-Nodejs
-Inquirerjs
-OOP
-TDD (jest tests)

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

### Testing

<img width="1427" alt="NPM Test" src="https://user-images.githubusercontent.com/107826386/195032049-fea299c3-f537-4261-830e-5f17fa133d06.png">


###Installation

Here are some tips for running the project 

Install node.js

Then, make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init in your command line.

Run npm i or npm install in order to download all the dependencies. Make sure to also download Inquirer.js by entering npm install inquirer in your terminal in the root directory of the project. Learn more about this package on npm documentation.

Run node index.js or node index in your terminal to launch the application, the first question will appear in your terminal.

To make sure the Jest tests work, run npm run test and inspect what the CLI returns.

Enjoy and don't hesitate to contribute! 🙂


## links

https://github.com/AlexMastroianni/week-10-challenge
