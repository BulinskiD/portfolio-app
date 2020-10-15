import React from "react"
import styled from "styled-components"
import Lesser from "../../theme/icons/Lesser"
import SelectedProject from "./SelectedProject"

const ProjectsInfo = styled.section`
  grid-row: projects-start / projects-end;
`

const SelectedWorksTypography = styled.h5`
  font-size: 81px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
    font-size: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 40px;
  }
`

const Semicolon = styled.span`
  font-size: 110px;
  font-family: Arial, sans-serif;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const WorksTypography = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: calc(-5vw - 20px);
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 1rem;
  }
`

const LesserSigns = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
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
      <SelectedWorksTypography>
        <span>
          selected <Semicolon>;</Semicolon>
        </span>
        <WorksTypography>
          <LesserSigns>
            <Lesser color={"yellow"} />
            <Lesser color={"black"} />
          </LesserSigns>
          <span>works</span>
        </WorksTypography>
      </SelectedWorksTypography>

      <ProjectsContainer>
        <SelectedProject />
        <SelectedProject />
        <SelectedProject />
      </ProjectsContainer>
    </ProjectsInfo>
  )
}
