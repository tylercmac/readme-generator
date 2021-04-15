// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'GPL') {
    return  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return ``;
  }
}

// A function that returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
      return `[MIT](https://opensource.org/licenses/MIT)`
    } else if (license === 'BSD') {
      return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === 'GPL') {
      return  `[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
    } else {
      return ``;
    }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  6. [License](#license)
  
  ## Installation
  
  \`\`\`bash
  git clone https://github.com:${data.github}/${data.repo}.git
  \`\`\`
  ${data.install}

  ## Usage
  
  This is an example of using it:
  \`\`\`
  ${data.usage}
  \`\`\`

  ## Contributing
  
  ${data.contribute}
  
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  Have any questions? Feel free head over to my [GitHub profile](https://github.com/${data.github}), or email me at ${data.email}.
  
  ## License
  
  This application is covered under the ${renderLicenseLink(data.license)} license.

`;
}

// exports this to use in index.js file
module.exports = {
  generateMarkdown
} 
