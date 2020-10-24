import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledInput = styled.input`
  padding: 5px 25px;
  font-size: 28px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;
  display: block;
  width: 100%;
`

const StyledLabel = styled.label`
  display: none;
`

export default function Input({ placeholder, name }) {
  return (
    <React.Fragment>
      <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
      <StyledInput name={name} placeholder={placeholder} />
    </React.Fragment>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
}
