import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"
import { ArrowRight } from "../../theme/icons/Arrows"
import { Integral } from "../../theme/icons/Integral"

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 70px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  display: inline-block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 35px;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:nth-child(1) {
    margin-top: 1em;
    margin-left: -37px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: 0;
    }
  }

  &:nth-child(2) {
    margin-bottom: 1em;
  }
`

export default function SeeMoreButton() {
  return (
    <StyledLink to={"/projects"}>
      <Row>
        <Integral />
        <span>see_</span>
      </Row>
      <Row>
        <span>more</span>
        <ArrowRight />
      </Row>
    </StyledLink>
  )
}
