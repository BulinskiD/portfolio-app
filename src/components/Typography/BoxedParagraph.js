import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Paragraph = styled.div`
  border: 8px solid black;
  position: relative;
  padding: 90px 50px 50px 50px;
  margin: 3vh 0 10vh 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 90px 5px 5px 5px;
    border: 2px solid black;
  }
`

const ParagraphTitle = styled.h5`
  position: absolute;
  margin: 0;
  padding: 10px 10%;
  top: -8px;
  font-weight: 300;
  background: white;
  left: 10%;
  border: 8px solid black;
  border-top: none;
  font-size: 33px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border: 2px solid black;
    border-top: none;
    top: -2px;
  }
`

export default function BoxedParagraph({ title, children }) {
  return (
    <Paragraph>
      <ParagraphTitle>{title}</ParagraphTitle>
      {children}
    </Paragraph>
  )
}

BoxedParagraph.propTypes = {
  title: PropTypes.string,
}
