import React from "react"
import PropTypes from "prop-types"
import { InteractiveSvg } from "./InteractiveSvg"

export default function GithubIcon({ light = false }) {
  return (
    <a href={"https://www.github.com"} target={"_blank"} rel={"noreferrer"}>
      <InteractiveSvg
        style={{ fill: light ? "white" : undefined }}
        xmlns="http://www.w3.org/2000/svg"
        width="31.77"
        height="30.447"
        viewBox="0 0 31.77 30.447"
      >
        <path
          id="github"
          d="M15.885.5A15.747,15.747,0,0,0,0,16.11,15.636,15.636,0,0,0,10.861,30.92c.794.147,1.085-.336,1.085-.751,0-.371-.013-1.353-.02-2.654-4.419.941-5.351-2.094-5.351-2.094a4.161,4.161,0,0,0-1.767-2.283c-1.439-.968.111-.948.111-.948A3.323,3.323,0,0,1,7.353,23.8a3.421,3.421,0,0,0,4.627,1.3,3.305,3.305,0,0,1,1.006-2.088C9.458,22.619,5.75,21.276,5.75,15.3a5.964,5.964,0,0,1,1.635-4.188,5.462,5.462,0,0,1,.139-4.131s1.33-.418,4.368,1.6a15.23,15.23,0,0,1,7.943,0c3.018-2.019,4.349-1.6,4.349-1.6a5.612,5.612,0,0,1,.159,4.131A5.988,5.988,0,0,1,25.971,15.3c0,6-3.713,7.316-7.248,7.7A3.7,3.7,0,0,1,19.8,25.884c0,2.089-.02,3.767-.02,4.274,0,.409.278.9,1.092.741a15.588,15.588,0,0,0,10.9-14.79A15.75,15.75,0,0,0,15.885.5Z"
          transform="translate(0 -0.5)"
        />
      </InteractiveSvg>
    </a>
  )
}

GithubIcon.propTypes = {
  light: PropTypes.bool,
}
