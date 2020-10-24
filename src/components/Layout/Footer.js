import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import GithubIcon from "../../theme/icons/GithubIcon"
import LinkedInIcon from "../../theme/icons/LinkedInIcon"
import { SimpleArrowTop } from "../../theme/icons/Arrows"
import { DesktopElement } from "../shared/HideableElement"

const FooterBackground = styled.div`
  background-color: black;
  grid-column: start / end;
  grid-row: footer-start / footer-end;
`

const FooterContainer = styled.div`
  grid-column: content-start / content-end;
  grid-row: footer-start / footer-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: ${({ theme }) => theme.spacing.pagePadding};
    padding-right: ${({ theme }) => theme.spacing.pagePadding};
  }
`

const IconsContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: flex-start;
`

const LeftSideIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`

const Author = styled.div`
  text-align: right;
  color: lightgray;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8em;
    text-align: center;
  }
`

const Logo = styled.img`
  height: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const GoToTopButton = styled.div`
  transform: rotate(90deg) translateX(50%) translateY(-100%);
  cursor: pointer;
  color: lightgray;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: rotate(90deg) translateX(50%) translateY(0);
  }
`

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <React.Fragment>
      <FooterBackground />
      <FooterContainer>
        <IconsContainer>
          <LeftSideIconsContainer>
            <Logo src={"/logo_light.svg"} alt={"db page Logo"} />
            <GithubIcon light />
            <LinkedInIcon light />
          </LeftSideIconsContainer>
          <GoToTopButton onClick={scrollToTop}>
            <SimpleArrowTop style={{ transform: "rotate(-90deg)" }} />
            <DesktopElement>
              <FormattedMessage id={"backToTop"} />
            </DesktopElement>
          </GoToTopButton>
        </IconsContainer>
        <Author>&copy; Dawid Buliński 2020</Author>
      </FooterContainer>
    </React.Fragment>
  )
}
