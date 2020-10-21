import React from "react"
import styled from "styled-components"
import { Link, FormattedMessage, useIntl } from "gatsby-plugin-intl"
import Slide from "react-awesome-reveal"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 86%;
  height: 100vh;
  z-index: ${({ theme }) => theme.zValues.menu};
  background: transparent linear-gradient(242deg, #636566 0%, #000000e6 100%) 0
    0 no-repeat padding-box;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`

const MenuLink = styled(Link)`
  font-size: 96px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;

  span {
    transition: all 0.3s;
  }

  span[data-color="white"] {
    color: ${({ theme }) => theme.colors.white};
  }

  span[data-color="yellow"] {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:hover span[data-color="white"] {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:hover span[data-color="yellow"] {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 50px;
  }
`

function MenuModal() {
  const intl = useIntl()

  return (
    <Container>
      <Slide cascade>
        <MenuLink to={"/"}>
          <FormattedMessage id={"home"} />
        </MenuLink>
        <MenuLink to={"/about"}>
          <span data-color={"white"}>
            {intl.formatMessage({ id: "about" }).split(" ").shift()}{" "}
          </span>
          <span data-color={"yellow"}>
            {intl.formatMessage({ id: "about" }).split(" ").pop()}
          </span>
        </MenuLink>
        <MenuLink to={"/projects"}>
          <span data-color={"yellow"}>
            <FormattedMessage id={"projects"} />
          </span>
        </MenuLink>
        <MenuLink to={"/contact"}>
          <FormattedMessage id={"contact"} />
        </MenuLink>
      </Slide>
    </Container>
  )
}

export default MenuModal
