import React from "react"
import PropTypes from "prop-types"
import { InteractiveSvg } from "./InteractiveSvg"

export default function LinkedInIcon({ light }) {
  return (
    <a href={"https://www.linkedin.com"} target={"_blank"} rel={"noreferrer"}>
      <InteractiveSvg
        style={{ fill: light ? "white" : undefined }}
        xmlns="http://www.w3.org/2000/svg"
        width="31.773"
        height="31.773"
        viewBox="0 0 31.773 31.773"
      >
        <path
          id="linkedin"
          d="M15.886,0A15.886,15.886,0,1,0,31.773,15.886,15.888,15.888,0,0,0,15.886,0ZM11.27,24.016H7.4V12.376H11.27ZM9.336,10.786H9.31a2.017,2.017,0,1,1,.051-4.022,2.017,2.017,0,1,1-.026,4.022Zm15.885,13.23H21.352V17.788c0-1.565-.56-2.632-1.96-2.632a2.118,2.118,0,0,0-1.985,1.415,2.65,2.65,0,0,0-.127.944v6.5H13.411s.051-10.548,0-11.64H17.28v1.648A3.841,3.841,0,0,1,20.767,12.1c2.546,0,4.454,1.664,4.454,5.239Zm0,0"
        />
      </InteractiveSvg>
    </a>
  )
}

LinkedInIcon.propTypes = {
  light: PropTypes.bool,
}
