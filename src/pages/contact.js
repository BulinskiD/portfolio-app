import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import FloatingCircle from "../components/Layout/FloatingCircle"
import ContactForm from "../components/Contact/ContactForm"

const MainInfoBackground = styled.div`
  overflow: hidden;
  position: relative;
  grid-column: start / content-end;
  grid-row: start / content-end;
  display: grid;
  background: transparent linear-gradient(242deg, #636566 0%, #000000e6 100%) 0
    0 no-repeat padding-box;
`

const FullPageCircle = styled.div`
  position: absolute;
  top: -125vh;
  right: -125vh;
  width: 250vh;
  height: 250vh;
  transform: rotate(260deg);
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const Background = () => {
  return (
    <MainInfoBackground>
      <FullPageCircle>
        <FloatingCircle
          blur={70}
          noScale
          backgroundUrl={"/shapes/ellipse.svg"}
        />
      </FullPageCircle>
    </MainInfoBackground>
  )
}

export default function Contact({ location }) {
  return (
    <Layout BackgroundComponent={Background} href={location.href}>
      <ContactForm />
    </Layout>
  )
}
