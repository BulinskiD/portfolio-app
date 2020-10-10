import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { slideOut } from "../../../../theme/animations/slideOut"

const MenuContainer = styled.div`
  animation: ${slideOut} 2s;
  position: fixed;
  top: 0;
  left: 0;
  width: 88%;
  height: 100vh;
  background: transparent linear-gradient(242deg, #636566 0%, #000000e6 100%) 0
    0 no-repeat padding-box;
  background-color: white;
`

function MenuModal({ onHide }) {
  return <MenuContainer onClick={onHide} />
}

MenuModal.propTypes = {
  onHide: PropTypes.func.isRequired,
}

export default MenuModal
