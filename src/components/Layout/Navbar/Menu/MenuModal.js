import React from "react"
import styled from "styled-components"
import { Link, FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { WHITE, YELLOW } from "../../../../theme/colors"
import Slide from "react-awesome-reveal"
import { MOBILE_SCREEN, TABLET_SCREEN } from "../../../../theme/breakpoints"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 83%;
  height: 100vh;
  z-index: 10;
  background: transparent linear-gradient(242deg, #636566 0%, #000000e6 100%) 0
    0 no-repeat padding-box;
  background-color: white;

  @media (max-width: ${TABLET_SCREEN}) {
    width: 100%;
  }
`

const MenuLink = styled(Link)`
  font-size: 96px;
  font-family: Orbitron, sans-serif;
  text-align: center;
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;

  span {
    transition: all 0.3s;
  }

  span[data-color="white"] {
    color: ${WHITE};
  }

  span[data-color="yellow"] {
    color: ${YELLOW};
  }

  &:hover {
    color: ${YELLOW};
  }

  &:hover span[data-color="white"] {
    color: ${YELLOW};
  }

  &:hover span[data-color="yellow"] {
    color: ${WHITE};
  }

  @media (max-width: ${TABLET_SCREEN}) {
    font-size: 72px;
  }

  @media (max-width: ${MOBILE_SCREEN}) {
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
