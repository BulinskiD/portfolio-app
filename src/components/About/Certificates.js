import React from "react"
import styled from "styled-components"
import TechnologyTile from "../shared/TechnologyTile"

const BackgroundContainer = styled.div`
  margin-left: -100vw;
  width: calc(200vw + 100%);
  background: transparent linear-gradient(242deg, #636566 0%, #000000e6 100%) 0
    0 no-repeat padding-box;
`

const Container = styled.section`
  margin-left: 100vw;
  width: calc(100% - 200vw);
`

const Title = styled.h4`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 46px;
  padding: 80px 0 50px 0;
`

const WhiteNode = styled.span`
  color: ${({ theme }) => theme.colors.white};
`

const YellowNode = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`

const StyledParagraph = styled.p`
  width: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`

const CertificatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 15%;
`

const certificates = [
  "epicreact.dev",
  "testingjavascript.com",
  "cert1",
  "lorem ipsum",
]

export default function Certificates() {
  return (
    <React.Fragment>
      <BackgroundContainer>
        <Container>
          <Title>
            <WhiteNode>my</WhiteNode> experience and{" "}
            <YellowNode>certificates</YellowNode>
          </Title>
          <StyledParagraph>
            For development and coding I try to use a various numer of tools and
            languages, which bla. Excitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </StyledParagraph>
          <CertificatesContainer>
            {certificates.map(certificate => (
              <TechnologyTile noMargin key={certificate}>
                {certificate}
              </TechnologyTile>
            ))}
          </CertificatesContainer>
        </Container>
      </BackgroundContainer>
    </React.Fragment>
  )
}
