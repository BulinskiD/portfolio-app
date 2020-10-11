import React from "react"
import styled from "styled-components"
import { Slide } from "react-awesome-reveal"

const BarsContainer = styled(Slide)`
  grid-row: content-start / content-end;
  grid-column: right-side-start / right-side-end;
  margin-top: 40%;
  justify-self: flex-end;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 12vw;
`

const Bar = styled.div`
  height: 20px;
`

const FirstBar = styled(Bar)`
  width: 80%;
  background-color: #636566;
`

const SecondBar = styled(Bar)`
  width: 70%;
  background-color: #ffe700;
`

const ThirdBar = styled(Bar)`
  width: 100%;
  background-color: #8d8e93;
`

const FourthBar = styled(Bar)`
  width: 85%;
  background-color: #000000;
`

const StyledSlide = styled(Slide)`
  min-width: 10vw;
  display: flex;
  justify-content: flex-end;
`

export default function RightSideBars() {
  return (
    <BarsContainer>
      <StyledSlide direction={"right"} cascade>
        <div />
        <FirstBar />
        <SecondBar />
        <ThirdBar />
        <FourthBar />
      </StyledSlide>
    </BarsContainer>
  )
}
