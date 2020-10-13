import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "./Navbar"
import { TABLET_SCREEN } from "../../theme/breakpoints"
import Footer from "./Footer"
import SocialMediaIcons from "./SocialMediaIcons"
import RightSideBars from "./RightSideBars"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: white;
    font-family: Roboto, sans-serif;
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`

const PageGrid = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: [left-side-start start] 8% [left-side-end content-start] 75% [content-end right-side-start] 17% [right-side-end end];
  grid-template-rows:
    [navbar-start start] 120px [navbar-end content-start] 1fr [content-end footer-start] minmax(
      25%,
      250px
    )
    [footer-end end];

  @media (max-width: ${TABLET_SCREEN}) {
    grid-template-columns: [start left-side-end content-start] 100% [content-end end];
  }
`

const PageWrapper = styled.div`
  z-index: 10;
  grid-column: content-start / content-end;
  grid-row: content-start / content-end;
  opacity: 1;

  @media (max-width: ${TABLET_SCREEN}) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export default function Layout({
  children,
  BackgroundComponent = () => <React.Fragment />,
}) {
  const intl = useIntl()

  const getCapitalizedTitle = () => {
    const title = intl.formatMessage({
      id: window.location.pathname.split("/").pop() || "home",
    })
    return title[0].toUpperCase() + title.slice(1)
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{getCapitalizedTitle()}</title>
      </Helmet>
      <PageGrid>
        <GlobalStyles />
        <SocialMediaIcons />
        <BackgroundComponent />
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <RightSideBars />
        <Footer />
      </PageGrid>
    </React.Fragment>
  )
}

Layout.propTypes = {
  BackgroundComponent: PropTypes.element.isRequired,
}
