import React from "react"
import styled from "styled-components"
import { LeftBracket, LeftCurlyBracket } from "../../theme/icons/Brackets"
import Slide from "react-awesome-reveal"

const MainInfoContainer = styled.section`
  padding-top: 50px;
  grid-row: main-info-start / main-info-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0;
  }
`

const HelloTypography = styled.h4`
  font-size: 96px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 60px;
  margin-bottom: 30px;
  color: black;
  &::first-letter {
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 50px;
  }
`

const DescriptionTypography = styled.h5`
  text-align: left;
  width: 70%;
  max-width: 70vw;
  font-weight: 300;
  font-size: 35px;
  letter-spacing: 0;
  color: #000000;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 32px;
    width: 100%;
    max-width: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 26px;
  }
`

const YellowMarkup = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`

const Introduction = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const IntroductionTypography = styled.div`
  white-space: nowrap;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    white-space: normal;
  }
`

const CodeSample = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: flex-end;
    gap: 10px;
  }
`

const CodeSampleTypography = styled.span`
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 24px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

export default function MainInfo() {
  return (
    <MainInfoContainer>
      <Slide cascade>
        <HelloTypography>hello,</HelloTypography>
        <DescriptionTypography>
          I'm <YellowMarkup>Dawid Buliński</YellowMarkup>, a passionate
          Front-end Developer, based in Poland.
          <Introduction>
            <IntroductionTypography>
              Let me introduce You to my projects.
            </IntroductionTypography>
            <CodeSample>
              <LeftCurlyBracket />
              <LeftBracket />
              <CodeSampleTypography>
                const history = this.state.history.slice(0,
                this.state.stepNumber + 1);
              </CodeSampleTypography>
            </CodeSample>
          </Introduction>
        </DescriptionTypography>
      </Slide>
    </MainInfoContainer>
  )
}
