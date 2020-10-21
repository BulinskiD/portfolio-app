import React from "react"
import styled from "styled-components"
import { tilt } from "../../../../theme/animations/tilt"
import { fadeIn } from "../../../../theme/animations/fadeIn"
import MenuModal from "./MenuModal"
import { roll } from "../../../../theme/animations/roll"
import { useIntl } from "gatsby-plugin-intl"
import useCloseOnEscape from "./useCloseOnEscape"

const MenuButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  z-index: ${({ theme }) => theme.zValues.logo};

  &:hover img {
    animation: ${props => (props.isOpen ? roll : tilt)} 0.5s;
  }

  &:hover {
    mix-blend-mode: difference;

    &::before {
      content: "${props => props.helperText}";
      color: white;
      margin-right: 15px;
      animation: ${fadeIn} 0.3s;
    }
  }
`

export default function Menu() {
  const intl = useIntl()
  const { shouldShowButton, isMenuOpen, setIsMenuOpen } = useCloseOnEscape()

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
