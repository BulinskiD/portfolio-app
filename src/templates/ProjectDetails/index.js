import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"
import Button from "../../components/shared/Button"
import { ArrowLeft, ArrowRight } from "../../theme/icons/Arrows"
import { Link } from "gatsby-plugin-intl"

const ProjectContainer = styled.section`
  margin-bottom: 80px;
`

const ProjectTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 81px;
  max-width: 70%;
`

const ProjectPreview = styled.div`
  margin: 40px 0 80px 0;
  display: flex;
  position: relative;
  height: 45vh;
  background-color: ${({ theme }) => theme.colors.black};
`

const ProjectPic = styled.div`
  background: url("${props => props.url}") no-repeat;
  background-size: cover;
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
`

const ProjectInfo = styled.p`
  border: 8px solid black;
  font-weight: 300;
  font-size: 20px;
  padding: 60px 40px;
`

const TechnologiesTitle = styled.h5`
  font-size: 20px;
`

const TechnologiesContainer = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 7%;
`

const Technology = styled.span`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 20px;
  padding: 8px 5vw;
  margin-top: ${() => Math.floor(Math.random() * 6)}%;
  transition: all 0.3s;

  &:nth-of-type(2n) {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    transform: scale(1.2);
  }
`

const Buttons = styled.div`
  margin-bottom: 100px;
  margin-top: 80px;
  display: flex;
  gap: 7%;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 3%;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 1% 4%;
  border: 6px solid black;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: white;
    background-color: black;

    ${ArrowRight} {
      fill: white;
    }
  }
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
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
              <Technology key={item}>{item}</Technology>
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
