import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledSvg = styled.svg`
  width: 2.5vw;
  fill: ${props => props.theme.colors[props.color]};
`

export default function Lesser(props) {
  return (
    <StyledSvg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="71.401"
      viewBox="0 0 55.201 71.401"
    >
      <path
        d="M90.774,251.3l41.551-30.75h13.65v7.05l-38.7,28.65,38.7,28.651v7.05h-13.65l-41.551-30.6Z"
        transform="translate(-90.774 -220.555)"
      />
    </StyledSvg>
  )
}

Lesser.propTypes = {
  color: PropTypes.string.isRequired,
}
