import React from "react"
import { Link } from "gatsby-plugin-intl"
import styled, { css } from "styled-components"
import { ArrowRight } from "../../theme/icons/Arrows"

const ProjectContainer = styled.section`
  height: 40vh;
  display: flex;
  width: 100%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
  }
`

const ProjectSection = styled.div`
  position: relative;
  flex-grow: 1;
  flex-basis: 50%;
  background-color: ${props => props.color};
  border: 1px solid black;
  ${props =>
    props.image &&
    css`
      background: url("${props.image}") no-repeat;
      background-size: cover;
    `}
`

const Title = styled.h5`
  margin-top: 5%;
  color: white;
  font-size: 46px;
  margin-left: -9px;
  font-family: Orbitron, sans-serif;
`

const ViewButton = styled(Link)`
  background-color: white;
  color: black;
  border: none;
  outline: none;
  position: absolute;
  bottom: -5px;
  left: 20%;
  font-size: 26px;
  font-weight: 300;
  text-decoration: none;
  padding: 15px 80px;
  display: flex;
  gap: 15px;
  align-items: center;
`

export default function SelectedProject() {
  return (
    <ProjectContainer>
      <ProjectSection color={"black"}>
        <Title>
          alinazachariasz.pl <br /> website
        </Title>
        <ViewButton to={"/"}>
          view project <ArrowRight />
        </ViewButton>
      </ProjectSection>
      <ProjectSection image={"/azkPage.png"} />
    </ProjectContainer>
  )
}
