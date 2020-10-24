import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledTextArea = styled.textarea`
  border: 8px solid black;
  outline: none;
  font-size: 28px;
  width: 100%;
`

const StyledLabel = styled.label`
  display: none;
`

export default function TextArea({ name, placeholder }) {
  return (
    <React.Fragment>
      <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
      <StyledTextArea rows={6} placeholder={placeholder} name={name} />
    </React.Fragment>
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
}
