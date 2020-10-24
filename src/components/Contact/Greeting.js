import React from "react"
import Title, { WhiteNode, YellowNode } from "../Typography/Title"

export default function Greeting() {
  return (
    <Title>
      <WhiteNode>say</WhiteNode> hi<YellowNode>!</YellowNode>
    </Title>
  )
}
