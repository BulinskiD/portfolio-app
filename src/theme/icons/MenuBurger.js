import React from "react"
import styled from "styled-components"

const StyledSvg = styled.svg`
  fill: black;
`

export default function MenuBurger() {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="35.661"
      height="23.922"
      viewBox="0 0 35.661 23.922"
    >
      <g className="a" transform="translate(0.663 0.71)">
        <path
          className="b"
          d="M3,28.973H37.459V25.144H3ZM3,19.4H37.459V15.572H3ZM3,6V9.829H37.459V6Z"
          transform="translate(-3 -6)"
        />
      </g>
      <path
        className="b"
        d="M3710.851,122.7v4.518H3675.19l4.272-4.518Z"
        transform="translate(-3675.19 -122.702)"
      />
      <path
        className="b"
        d="M35.661,0V4.518H0L4.272,0Z"
        transform="translate(35.661 23.922) rotate(180)"
      />
      <path
        className="b"
        d="M3710.851,107v4.561H3675.19V107Z"
        transform="translate(-3675.19 -97.298)"
      />
    </StyledSvg>
  )
}
