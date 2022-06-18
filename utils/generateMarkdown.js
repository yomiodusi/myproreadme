
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Project Description
  ${data.Description}
  # Table of Contents
  * [Installation](#Installation)
  * [Visuals](#Visuals)
  * [Requirments](#Requirments)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Roadmap](#Roadmap)
  * [Questions](#Questions)
  * [Contact Info](#Email)
  * [Project Status](#Status)

  ## Visual of Project
  ${data.Visuals}

  ## Usage Information
  ${data.Requirements}

  ## Test Commands
  ${data.Usage}

  ## Contributions to Project
  ${data.Contributing}

  ## Future Developments
  ${data.Roadmap}

  ## Contact Information
  ${data.Questions}

  ## Username
  https://github.com/${data.Username}
  
  ## Your Email Address
  ${data.Email}

  ## Status of Project
  ${data.Status}

`;
}

module.exports = generateMarkdown;
