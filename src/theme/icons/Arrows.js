import React from "react"

export function ArrowRight() {
  return (
    <img
      style={{ height: "0.8em" }}
      src={"/icons/arrowRight.svg"}
      alt={"Arrow right"}
    />
  )
}

export function ArrowLeft() {
  return (
    <img
      style={{ height: "1em" }}
      src={"/icons/arrowLeft.svg"}
      alt={"Arrow left"}
    />
  )
}

export function SimpleArrowTop({ style }) {
  return (
    <img style={style} src={"/icons/simple_arrow_top.svg"} alt={"Arrow top"} />
  )
}
