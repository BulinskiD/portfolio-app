import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import GithubIcon from "../../theme/icons/GithubIcon"
import LinkedInIcon from "../../theme/icons/LinkedInIcon"

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
  overflow-y: hidden;
  justify-content: space-between;
  align-items: flex-start;
`

const LeftSideIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`

const Author = styled.div`
  text-align: right;
  color: lightgray;
`

const GoToTopButton = styled.div`
  transform: rotate(90deg) translateX(50%) translateY(-100%);
  cursor: pointer;
  color: lightgray;
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
            <img
              style={{ height: "40px" }}
              src={"/logo.svg"}
              alt={"db page Logo"}
            />
            <GithubIcon light />
            <LinkedInIcon light />
          </LeftSideIconsContainer>
          <GoToTopButton onClick={scrollToTop}>
            <FormattedMessage id={"backToTop"} />
          </GoToTopButton>
        </IconsContainer>
        <Author>&copy; Dawid Buliński 2020</Author>
      </FooterContainer>
    </React.Fragment>
  )
}
