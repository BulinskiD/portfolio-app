import React from "react"
import styled from "styled-components"

const TitleContainer = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 81px;
  margin: 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 60px;
  }
`

export const YellowNode = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`

export const WhiteNode = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

export default function Title({ children }) {
  return <TitleContainer>{children}</TitleContainer>
}
