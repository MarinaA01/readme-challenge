// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Lots of help from Learning assistants
function renderLicenseBadge(license) {
    
    if(license === 'MIT') {
        yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPLv3') {
        yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else {
        license = 'N/A'
    }
    return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT License](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
        return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPLv3') {
        return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
        return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

   ${data.description}

   ## Installation

   ${data.installation}

   ## Usage

   ${data.usage}

   ## Credits 

   ${data.credits}

   ## License

   This project is licensed under the ${data.license} license.

   ## Contributers

   ${data.contributing}

   ## Tests

   ${data.tests}

   ## Questions

   ${data.github}

   Feel free to reach out with more questions at ${data.email}

`;
}

module.exports = generateMarkdown;
