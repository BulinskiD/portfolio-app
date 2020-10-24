import jsonProjects from "./projects.json"

export const projects = jsonProjects
export const promotedProjects = projects.filter(({ isPromoted }) => isPromoted)
