import React from "react"
import BoxedParagraph from "../Typography/BoxedParagraph"
import TechnologyTile from "../shared/TechnologyTile"
import styled from "styled-components"

const ToolsContainer = styled.div`
  width: 60%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`

const ToolsTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 41px;
  margin: 50px 0;
`

const TechnologiesContainer = styled.div`
  margin: 4%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4vh;
`

const technologies = [
  "HTML5",
  "CSS3",
  "React",
  "Typescript",
  "Javascript ES6+",
  "Git",
  "SonarQube",
  "CI & CD",
]

export default function Tools() {
  return (
    <ToolsContainer>
      <BoxedParagraph title={"tools I use"}>
        <ToolsTitle>how I work ;</ToolsTitle>
        I'm baby echo park church-key cronut heirloom 3 wolf moon jean shorts
        migas chillwave. Art party pitchfork gluten-free coloring book VHS 90's
        mlkshk skateboard cornhole. Pok pok ethical distillery activated
        charcoal, scenester lo-fi kombucha semiotics tousled four dollar toast
        kinfolk blog cardigan. Subway tile plaid yuccie portland, art party vice
        salvia keytar. Dreamcatcher pour-over single-origin coffee hot chicken,
        man braid aesthetic enamel pin tattooed celiac hell of twee. Shoreditch
        seitan tumblr copper mug.
        <br />
        <br />
        Web development languages:
        <TechnologiesContainer>
          {technologies.map(technology => (
            <TechnologyTile noMargin key={technology}>
              {technology}
            </TechnologyTile>
          ))}
        </TechnologiesContainer>
      </BoxedParagraph>
    </ToolsContainer>
  )
}
