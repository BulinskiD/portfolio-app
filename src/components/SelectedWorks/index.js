import React from "react"
import styled from "styled-components"
import SelectedProject from "./SelectedProject"
import SelectedWorksHeader from "./SelectedWorksHeader"
import { promotedProjects } from "../../../static/data/projects"

const ProjectsInfo = styled.section`
  grid-row: projects-start / projects-end;
`

const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;

  section:nth-child(2n) {
    margin-left: 10vw;
  }
`

export default function SelectedWorks() {
  return (
    <ProjectsInfo id={"selected-projects"}>
      <SelectedWorksHeader />
      <ProjectsContainer>
        {promotedProjects.map(project => (
          <SelectedProject key={project.id} />
        ))}
      </ProjectsContainer>
    </ProjectsInfo>
  )
}
