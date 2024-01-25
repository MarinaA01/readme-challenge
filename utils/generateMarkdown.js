// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseType = license.license;
    let yourLicense = ''
    
    if(licenseType === 'MIT') {
        yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    } else if (licenseType === 'GPLv3') {
        yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (licenseType === 'GPL') {
        yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    } else {
        license.license = 'N/A'
    }
    return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenses = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0'
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(license)}

  ## Description

   ${data.description}

   ## Installation

   ${data.installation}

   ## Usage

   ${data.usage}

   ## Credits 

   ${data.credits}

   ## License

   This project is licensed under the ${data.license} license. Learn more here: ${renderLicenseLink()}

   ## Contributers

   ${data.contributing}

   ## Tests

   ${data.tests}

   ## Questions

   ${data.github}

`;
}

module.exports = generateMarkdown;
