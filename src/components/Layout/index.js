import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "./Navbar"
import { TABLET_SCREEN } from "../../theme/breakpoints"
import Footer from "./Footer"
import SocialMediaIcons from "./SocialMediaIcons"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: white;
    font-family: Roboto, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`

const PageGrid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: [left-side-start start] 8% [left-side-end content-start] 80% [content-end right-side-start] 12% [right-side-end end];
  grid-template-rows: [navbar-start start] 120px [navbar-end content-start] 1fr [content-end footer-start] 10% [footer-end end];

  @media (max-width: ${TABLET_SCREEN}) {
    grid-template-columns: [start left-side-end content-start] 100% [content-end end];
  }
`

const PageWrapper = styled.div`
  grid-column: content-start / content-end;
  grid-row: content-start / content-end;
  opacity: 1;
`

const PageBackground = styled.div`
  grid-column: start / content-end;
  grid-row: start / content-end;
  background: transparent linear-gradient(242deg, #636566 0%, #000000e6 100%) 0
    0 no-repeat padding-box;
`

export default function Layout({ children }) {
  return (
    <PageGrid>
      <GlobalStyles />
      <PageBackground />
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
      <SocialMediaIcons />
      <Footer />
    </PageGrid>
  )
}
