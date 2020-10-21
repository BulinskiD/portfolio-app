import React from "react"
import styled from "styled-components"

const Paragraph = styled.p`
  border: 8px solid black;
  position: relative;
  font-size: 20px;
  padding: 90px 50px 50px 50px;
  margin: 3vh 0 10vh 0;
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
`

export default function BoxedParagraph() {
  return (
    <Paragraph>
      <ParagraphTitle>my work</ParagraphTitle>
      As a freelancer and a software company employee I developed many projects,
      some of which are presented here. Also, here are some of my projects that
      I created during my spare time.All of those projects are available on my
      github repository.
    </Paragraph>
  )
}
