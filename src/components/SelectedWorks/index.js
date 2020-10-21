import React from "react"
import styled from "styled-components"
import SelectedProject from "./SelectedProject"
import SelectedWorksHeader from "./SelectedWorksHeader"
import { promotedProjects } from "../../../static/data/projects"
import SeeMoreButton from "./SeeMoreButton"

const ProjectsInfo = styled.section`
  grid-row: projects-start / projects-end;
`

const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`

export default function SelectedWorks() {
  return (
    <ProjectsInfo id={"selected-projects"}>
      <SelectedWorksHeader />
      <ProjectsContainer>
        {promotedProjects.map(project => (
          <SelectedProject url={project.slug} key={project.id} />
        ))}
      </ProjectsContainer>
      <SeeMoreButton />
    </ProjectsInfo>
  )
}
