import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { float } from "../../theme/animations/float"

const Circle = styled.div`
  width: 100%;
  height: 100%;
  background: transparent url("${props => props.backgroundUrl}") 0 0 no-repeat
    padding-box;
  background-size: cover;
  filter: blur(${props => props.blur}px);

  ${props =>
    props.noScale
      ? ""
      : css`
          animation: ${float} 30s infinite reverse;
        `}
`

export default function FloatingCircle(props) {
  return <Circle {...props} />
}

FloatingCircle.propTypes = {
  blur: PropTypes.number,
  noScale: PropTypes.bool,
  backgroundUrl: PropTypes.string,
}
