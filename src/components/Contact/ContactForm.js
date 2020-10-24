import React from "react"
import styled from "styled-components"
import Greeting from "./Greeting"
import Input from "../shared/Input"
import TextArea from "../shared/TextArea"
import BorderedButton from "../shared/BorderedButton"
import { Fade } from "react-awesome-reveal"

const FormContainer = styled.form`
  margin: 5% 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`

const SubmitButton = styled.span`
  font-size: 26px;
  font-weight: 300;
`

export default function ContactForm() {
  return (
    <FormContainer>
      <Fade triggerOnce cascade delay={100}>
        <Greeting />
        <Input name={"email"} placeholder={"Your email"} />
        <Input name={"name"} placeholder={"Your name"} />
        <Input name={"subject"} placeholder={"Your subject"} />
        <TextArea name={"message"} placeholder={"Message"} />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <BorderedButton>
            <SubmitButton>submit</SubmitButton>
          </BorderedButton>
        </div>
      </Fade>
    </FormContainer>
  )
}
