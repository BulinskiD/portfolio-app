import React from "react"
import { Link } from "gatsby-plugin-intl"
import styled from "styled-components"
import Menu from "./Menu"
import { TABLET_SCREEN } from "../../../theme/breakpoints"

const NavbarContainer = styled.nav`
  position: relative;
  grid-column: content-start / content-end;
  grid-row: navbar-start / navbar-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 3% 0 0;

  @media (max-width: ${TABLET_SCREEN}) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

const Logo = styled.img`
  position: relative;
  z-index: 100000;
  height: 4vh;
  min-height: 40px;
`

export default function Navbar() {
  return (
    <NavbarContainer>
      <Link to={"/"}>
        <Logo src={"/logo.svg"} alt={"db page Logo"} />
      </Link>
      <Menu />
    </NavbarContainer>
  )
}
