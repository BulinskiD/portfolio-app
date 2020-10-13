import React from "react"
import Layout from "../components/Layout"
import FloatingCircle from "../components/Layout/FloatingCircle"
import styled from "styled-components"
import { TABLET_SCREEN } from "../theme/breakpoints"
import MainInfo from "../components/MainInfo"

const PageBackground = styled.div`
  overflow: hidden;
  position: relative;
  grid-column: start / content-end;
  grid-row: start / content-end;
  display: grid;
  grid-template-rows: [main-info-start] 100vh [main-info-end projects-start] 1fr [projects-end];
`

const MainInfoBackground = styled.div`
  grid-row: main-info-start / main-info-end;
  background: transparent linear-gradient(242deg, #636566 0%, #000000e6 100%) 0
    0 no-repeat padding-box;
`

const SmallCircle = styled.div`
  position: absolute;
  top: 50vh;
  left: 5%;
  margin-left: 0;
  width: 15vh;
  height: 15vh;
`

const FullPageCircle = styled.div`
  position: absolute;
  top: -125vh;
  right: -125vh;
  width: 250vh;
  height: 250vh;
  transform: rotate(260deg);
  @media (max-width: ${TABLET_SCREEN}) {
    display: none;
  }
`

const Background = () => {
  return (
    <PageBackground>
      <MainInfoBackground />
      <SmallCircle>
        <FloatingCircle blur={8} backgroundUrl={"/Ellipse 2.svg"} />
      </SmallCircle>
      <FullPageCircle>
        <FloatingCircle blur={70} noScale backgroundUrl={"/Ellipse 2.svg"} />
      </FullPageCircle>
    </PageBackground>
  )
}

const Container = styled.div`
  z-index: 1;
  display: grid;
  grid-template-rows: [main-info-start] calc(100vh - 120px) [main-info-end projects-start] 1fr [projects-end];
`

const ProjectsInfo = styled.section`
  grid-row: projects-start / projects-end;
  height: 100vh;
`

export default function Home() {
  return (
    <Layout BackgroundComponent={Background}>
      <Container>
        <MainInfo />
        <ProjectsInfo>Hi</ProjectsInfo>
      </Container>
    </Layout>
  )
}
