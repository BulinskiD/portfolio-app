import React from "react"
import styled from "styled-components"

const TitleContainer = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 81px;
  margin-top: 10px;
`

export default function Title({ children }) {
  return <TitleContainer>{children}</TitleContainer>
}
