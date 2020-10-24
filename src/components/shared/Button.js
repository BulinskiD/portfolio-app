import styled from "styled-components"
import { ArrowRight } from "../../theme/icons/Arrows"
import React from "react"
import PropTypes from "prop-types"

const ViewButton = styled.div`
  background-color: white;
  color: black;
  position: absolute;
  bottom: -5px;
  left: 80px;
  font-size: 26px;
  font-weight: 300;
  padding: 15px 50px;
  display: flex;
  gap: 15px;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

export default function Button({ children, onClick }) {
  return (
    <ViewButton onClick={onClick}>
      {children} <ArrowRight />
    </ViewButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}
