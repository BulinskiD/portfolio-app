import React from "react"
import { Link } from "gatsby-plugin-intl"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Button from "../shared/Button"

const ProjectSection = styled.div`
  position: relative;
  flex-grow: 1;
  flex-basis: 50%;
  background-color: ${props => props.color};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  ${props =>
    props.image &&
    css`
      background: url("${props.image}") no-repeat;
      filter: grayscale(100%);
      background-size: cover;
      transition: filter 0.3s;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
        flex-basis: 100%;
        filter: grayscale(0);
      }
    `}
`

const Title = styled.h5`
  margin-top: 40px;
  color: white;
  font-size: 46px;
  margin-left: -9px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  transition: color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 26px;
  }
`

const ProjectContainer = styled(Link)`
  height: 40vh;
  overflow: hidden;
  width: 100%;
  background-color: white;
  color: black;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    margin-left: -${({ theme }) => theme.pageDimensions.leftSide};
    width: calc(110%);

    ${ProjectSection} {
      filter: grayscale(0);
    }

    ${Title} {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: auto;

    &:nth-of-type(2n) {
      margin-left: 0;
    }

    &:hover {
      margin-left: 0;
      width: 100%;
    }
  }
`

const MobileTitle = styled.h5`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
    display: block;
    font-size: 15px;
    font-weight: 300;
    max-width: 50%;
  }
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  &:nth-of-type(2n) {
    margin-left: 10vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:nth-of-type(2n) {
      margin-left: 0;
    }
  }
`

export default function SelectedProject({ project }) {
  return (
    <Project>
      <ProjectContainer to={`/projects${project.slug}`}>
        <ProjectSection color={"black"}>
          <Title>{project.title}</Title>
          <Button>view project</Button>
        </ProjectSection>
        <ProjectSection image={project.imageURL} />
      </ProjectContainer>
      <MobileTitle>{project.title}</MobileTitle>
    </Project>
  )
}

SelectedProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    slug: PropTypes.string,
    title: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    isPromoted: PropTypes.bool,
  }),
}
