const path = require(`path`)
const projects = require("./static/data/projects.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  projects.forEach(project => {
    createPage({
      path: `/projects${project.slug}`,
      component: path.resolve(`./src/templates/ProjectDetails/index.js`),
      context: {
        project,
      },
    })
  })
}
