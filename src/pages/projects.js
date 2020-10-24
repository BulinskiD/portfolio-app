import React from "react"
import Layout from "../components/Layout"
import { projects } from "../../static/data/projects"
import SelectedProject from "../components/SelectedWorks/SelectedProject"
import styled from "styled-components"
import Title from "../components/Typography/Title"
import BoxedParagraph from "../components/Typography/BoxedParagraph"

const ProjectsContainer = styled.div`
  width: 100%;
  display: grid;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`

export default function Projects({ location }) {
  return (
    <Layout href={location.href}>
      <BoxedParagraph title={"my work"}>
        As a freelancer and a software company employee I developed many
        projects, some of which are presented here. Also, here are some of my
        projects that I created during my spare time.All of those projects are
        available on my github repository.
      </BoxedParagraph>
      <Title>projects</Title>
      <ProjectsContainer>
        {projects.map(project => (
          <SelectedProject project={project} key={project.id} />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}
