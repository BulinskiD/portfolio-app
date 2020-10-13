import { keyframes } from "styled-components"

export const float = keyframes`
  from {
  opacity: .8;
    filter: blur(8px);
    transform: rotateX(0) rotate(0) scale(1) translate(0, 0);
  }
  33% {
    opacity: 1;
      filter: blur(4px);
    transform:  rotateX(40deg) rotate(15deg) scale(1.3) translate(20px, 20px);
  }
  66% {
  opacity: 0.6;
    filter: blur(10px);
    transform:  rotateX(-40deg)  rotate(-15deg) scale(0.7) translate(-20px -30px)
  }
  to {
    filter: blur(8px);
  opacity: .8;
    transform: rotateX(0)  rotate(0) scale(1) translate(0, 0);
  }
`
