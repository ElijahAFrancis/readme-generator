// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none') {
    return '';
  } else {
    return `![license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else if (license === 'MIT') {
    return `https://www.mit.edu/~amini/LICENSE.md`;
  } else if (license === 'Apache2.0') {
    return `https://www.apache.org/licenses/LICENSE-2.0.txt`;
  } else if (license === 'GPL') {
    return `https://www.gnu.org/licenses/gpl-3.0.txt`;
  } else if (license === 'MPL') {
    return `https://www.mozilla.org/media/MPL/2.0/index.f75d2927d3c1.txt`;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  } else {
    return `## License
    Licensed under the ${license} license
    ${renderLicenseLink(license)}`;
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contribution](#contribution)
  [Testing](#testing)
  [Questions](questions)
  [License](license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## contribution
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## Questions
  https://github.com/${data.username}
  ${data.email}

  ## License
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;
