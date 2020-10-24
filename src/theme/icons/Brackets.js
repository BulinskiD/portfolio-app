import React from "react"
import styled from "styled-components"

const StyledImg = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: 60px;
  }
`

export function LeftCurlyBracket() {
  return (
    <StyledImg src={"/icons/leftCurlyBracket.svg"} alt={"Left curly bracket"} />
  )
}

export function LeftBracket() {
  return <StyledImg src={"/icons/leftBracket.svg"} alt={"Left bracket"} />
}
