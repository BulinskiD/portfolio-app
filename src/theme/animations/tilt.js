import { keyframes } from "styled-components"

export const tilt = keyframes`
  0% {
    transform: rotate(0);
  }
  30% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(10deg);
  }
  to {
    transform: rotate(0);
  }
`
