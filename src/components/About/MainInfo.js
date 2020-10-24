import React from "react"
import styled from "styled-components"
import { Fade } from "react-awesome-reveal"

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: -${({ theme }) => theme.spacing.pagePadding};
    width: calc(100% + (2 * (${({ theme }) => theme.spacing.pagePadding})));
  }
`

const Title = styled.h4`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 46px;
  padding-left: 120px;
  padding-top: 60px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 0;
    text-align: center;
  }
`

const MainInfoContent = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: [start name-start] 90px [name-end content-start] 2fr [content-end picture-start] 1fr [picture-end end];
`

const NameContainer = styled.div`
  position: relative;
  grid-column: name-start / name-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const Name = styled.h5`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: bottom left;
  transform: rotate(90deg);
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 33px;
  font-weight: 300;
  margin: 0;
  padding: 5px 30px;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`

const Information = styled.p`
  padding-left: 9%;
  grid-column: content-start / content-end;
  line-height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: start / end;
    grid-row: 2;
    padding: 20px 5px;
  }
`

const Picture = styled.img`
  grid-column: picture-start / picture-end;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: start / end;
    grid-row: 1;
  }
`

export default function MainInfo() {
  return (
    <Container>
      <Fade>
        <Title>about me</Title>
      </Fade>
      <MainInfoContent>
        <NameContainer>
          <Name>Dawid Buliński</Name>
        </NameContainer>
        <Information>
          I specialize in Front End Development and bla. Liusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis
          unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt.
        </Information>
        <Picture src={"/images/dawid_bulinski.png"} />
      </MainInfoContent>
    </Container>
  )
}
