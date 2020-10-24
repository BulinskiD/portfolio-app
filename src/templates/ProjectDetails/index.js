import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import Button from "../../components/shared/Button"
import { ArrowLeft, ArrowRight } from "../../theme/icons/Arrows"
import { Link } from "gatsby-plugin-intl"
import TechnologyTile from "../../components/shared/TechnologyTile"

const ProjectContainer = styled.section`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
`

const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 81px;
  max-width: 70%;
  order: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`

const ProjectPreview = styled.div`
  margin: 40px 0 80px 0;
  display: flex;
  position: relative;
  height: 45vh;
  background-color: ${({ theme }) => theme.colors.black};
  order: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
  }
`

const ProjectPic = styled.div`
  background: url("${props => props.url}") no-repeat;
  background-size: cover;
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`

const ProjectInfo = styled.p`
  border: 8px solid black;
  font-weight: 300;
  padding: 60px 40px;
  order: 4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border: none;
    padding: 20px 0;
  }
`

const TechnologiesTitle = styled.h5`
  font-size: 20px;
`

const TechnologiesContainer = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 7%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 3%;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 1% 4%;
  border: 6px solid black;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: white;
    background-color: black;

    ${ArrowRight} {
      fill: white;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 50%;
    font-size: 17px;
    border-width: 3.5px;
    padding: 1%;
  }
`

const Buttons = styled.div`
  margin-bottom: 100px;
  margin-top: 80px;
  display: flex;
  gap: 7%;
  order: 10;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    order: 3;
    margin: 30px 0;

    ${ButtonContainer}:nth-of-type(2) {
      margin-top: 15%;
    }
  }
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  order: 11;
`

export default function ProjectDetails({ pageContext }) {
  return (
    <Layout>
      <ProjectContainer>
        <ProjectTitle>{pageContext.project.title}</ProjectTitle>
        <ProjectPreview>
          <Button>launch app</Button>
          <ProjectPic url={pageContext.project.imageURL} />
        </ProjectPreview>

        <ProjectInfo>
          {pageContext.project.description}

          <TechnologiesTitle>Web development languages:</TechnologiesTitle>
          <TechnologiesContainer>
            {pageContext.project.technologies.map(item => (
              <TechnologyTile key={item}>{item}</TechnologyTile>
            ))}
          </TechnologiesContainer>
        </ProjectInfo>

        <Buttons>
          <ButtonContainer>
            source code <ArrowRight />
          </ButtonContainer>

          <ButtonContainer>
            launch app <ArrowRight />
          </ButtonContainer>
        </Buttons>

        <StyledLink to={"/projects"}>
          <ArrowLeft /> go back to the projects
        </StyledLink>
      </ProjectContainer>
    </Layout>
  )
}
