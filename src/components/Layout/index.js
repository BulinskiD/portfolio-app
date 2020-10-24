import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SocialMediaIcons from "./SocialMediaIcons"
import RightSideBars from "./RightSideBars"
import { Helmet } from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { theme } from "../../theme/theme"

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`

const PageGrid = styled.div`
  grid-template-rows: ${({ theme }) => theme.layout.rows};
  grid-template-columns: ${({ theme }) => theme.layout.columns};
  display: grid;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: [start left-side-end content-start] 100% [content-end end];
  }
`

const PageWrapper = styled.div`
  z-index: ${({ theme }) => theme.zValues.upperFloor};
  grid-column: content-start / content-end;
  grid-row: content-start / content-end;
  opacity: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: ${({ theme }) => theme.spacing.pagePadding};
    padding-right: ${({ theme }) => theme.spacing.pagePadding};
  }
`

export default function Layout({
  children,
  href,
  BackgroundComponent = () => <React.Fragment />,
}) {
  const intl = useIntl()

  const getCapitalizedTitle = () => {
    const title = intl.formatMessage({
      id: href?.split("/").pop() || "home",
    })
    return `${title[0].toUpperCase()}${title.slice(1)}`
  }

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <Helmet>
          <title>{getCapitalizedTitle()}</title>
        </Helmet>
        <PageGrid>
          <SocialMediaIcons />
          <BackgroundComponent />
          <Navbar />
          <PageWrapper>{children}</PageWrapper>
          <RightSideBars />
          <Footer />
        </PageGrid>
      </React.Fragment>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  BackgroundComponent: PropTypes.func.isRequired,
  href: PropTypes.string,
}
