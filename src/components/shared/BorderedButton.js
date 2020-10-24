import React from "react"
import styled from "styled-components"
import { ArrowRight } from "../../theme/icons/Arrows"

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

export default function BorderedButton({ children }) {
  return (
    <ButtonContainer>
      {children} <ArrowRight />
    </ButtonContainer>
  )
}
