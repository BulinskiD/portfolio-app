import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: black;
  grid-column: start / end;
`

export default function Footer() {
  return <FooterContainer>Hello foot</FooterContainer>
}
