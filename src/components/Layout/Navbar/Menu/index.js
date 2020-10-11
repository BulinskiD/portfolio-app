import React from "react"
import styled from "styled-components"
import { tilt } from "../../../../theme/animations/tilt"
import { fadeIn } from "../../../../theme/animations/fadeIn"
import MenuModal from "./MenuModal"
import { roll } from "../../../../theme/animations/roll"
import { useIntl } from "gatsby-plugin-intl"

const MenuButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  z-index: 1000;

  &:hover img {
    animation: ${props => (props.isOpen ? roll : tilt)} 0.5s;
  }

  &:hover {
    &::before {
      content: "${props => props.helperText}";
      color: white;
      margin-right: 15px;
      animation: ${fadeIn} 0.3s;
    }
  }
`

export default function Menu() {
  const timeoutRef = React.useRef(0)
  const intl = useIntl()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [shouldShowButton, setShouldShowButton] = React.useState(true)

  React.useEffect(() => {
    const handleClose = e => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("keyup", handleClose)
    return () => document.removeEventListener("keyup", handleClose)
  }, [])

  React.useEffect(() => {
    setShouldShowButton(false)
    timeoutRef.current = setTimeout(() => setShouldShowButton(true), 200)
    const timeout = timeoutRef.current

    return () => window.clearInterval(timeout)
  }, [isMenuOpen])

  return (
    <React.Fragment>
      {shouldShowButton && (
        <MenuButton
          isOpen={isMenuOpen}
          helperText={
            isMenuOpen
              ? intl.formatMessage({ id: "close" })
              : intl.formatMessage({ id: "menu" })
          }
          onClick={() => setIsMenuOpen(openMenu => !openMenu)}
        >
          <img
            src={isMenuOpen ? "/close.svg" : "/menu_burger.svg"}
            alt={"Menu"}
          />
        </MenuButton>
      )}
      {isMenuOpen && <MenuModal />}
    </React.Fragment>
  )
}
