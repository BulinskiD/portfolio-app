import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { tilt } from "../../../theme/animations/tilt"
import { fadeIn } from "../../../theme/animations/fadeIn"
import MenuModal from "./Menu"

const NavbarContainer = styled.nav`
  position: relative;
  grid-column: content-start / content-end;
  grid-row: navbar-start / navbar-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 3% 0 0;
`

const Logo = styled.img`
  position: relative;
  z-index: 100000;
  height: 4vh;
  min-height: 40px;
`

const MenuButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover img {
    animation: ${tilt} 0.3s;
  }

  &:hover {
    &::before {
      content: "menu";
      color: white;
      margin-right: 15px;
      animation: ${fadeIn} 0.3s;
    }
  }
`

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <React.Fragment>
      <NavbarContainer>
        <Link to={"/"}>
          <Logo src={"/logo.svg"} alt={"db page Logo"} />
        </Link>
        <MenuButton onClick={() => setOpenMenu(true)}>
          <img src={"/menu_burger.svg"} alt={"Menu"} />
        </MenuButton>
      </NavbarContainer>
      {openMenu && <MenuModal onHide={() => setOpenMenu(false)} />}
    </React.Fragment>
  )
}
