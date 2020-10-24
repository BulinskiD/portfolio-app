import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Fade from "react-awesome-reveal"

const Technology = styled(Fade)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.yellow};
  padding: 8px 5vw;
  margin-top: ${({ noMargin }) =>
    noMargin ? 0 : Math.floor(Math.random() * 6)}%;
  transition: all 0.3s;

  &:nth-of-type(2n) {
    margin-left: ${({ noMargin }) => (noMargin ? "10%" : 0)};
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 20px;
    &:nth-of-type(2n) {
      margin-left: 20%;
    }
  }
`

export default function TechnologyTile({ noMargin, children }) {
  return <Technology noMargin={noMargin}>{children}</Technology>
}

TechnologyTile.propTypes = {
  noMargin: PropTypes.bool,
}
