import React from "react"
import styled from "styled-components"
import { TABLET_SCREEN } from "../../theme/breakpoints"

const IconsContainer = styled.aside`
  grid-column: start / left-side-end;
  grid-row: content-start / content-end;
  place-self: center;
  display: flex;
  flex-direction: column;

  @media (max-width: ${TABLET_SCREEN}) {
    display: none;
  }
`

export default function SocialMediaIcons() {
  return (
    <IconsContainer>
      <img src={"/github.svg"} alt={"ELIZQ"} />
    </IconsContainer>
  )
}
