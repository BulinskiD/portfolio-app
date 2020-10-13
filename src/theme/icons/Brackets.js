import React from "react"
import styled from "styled-components"
import { MOBILE_SCREEN } from "../breakpoints"

const StyledImg = styled.img`
  @media (max-width: ${MOBILE_SCREEN}) {
    max-height: 60px;
  }
`

export function LeftCurlyBracket() {
  return <StyledImg src={"/leftCurlyBracket.svg"} alt={"Left curly bracket"} />
}

export function LeftBracket() {
  return <StyledImg src={"/leftBracket.svg"} alt={"Left bracket"} />
}
