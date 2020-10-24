import React from "react"
import styled from "styled-components"
import GithubIcon from "../../theme/icons/GithubIcon"
import LinkedInIcon from "../../theme/icons/LinkedInIcon"
import Slide from "react-awesome-reveal"

const IconsContainer = styled.aside`
  z-index: ${({ theme }) => theme.zValues.upperFloor};
  grid-column: start / left-side-end;
  grid-row: content-start / content-end;
  justify-self: center;
  margin-top: 50vh;
  display: flex;
  gap: 25px;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

export default function SocialMediaIcons() {
  return (
    <IconsContainer>
      <Slide cascade delay={1000}>
        <GithubIcon />
        <LinkedInIcon />
      </Slide>
    </IconsContainer>
  )
}
