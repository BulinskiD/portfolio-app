import React from "react"

export default () => {
  const timeoutRef = React.useRef(0)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [shouldShowButton, setShouldShowButton] = React.useState(true)

  React.useEffect(() => {
    const handleClose = e => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("keyup", handleClose)
    return () => document.removeEventListener("keyup", handleClose)
  }, [])

  React.useEffect(() => {
    setShouldShowButton(false)
    timeoutRef.current = setTimeout(() => setShouldShowButton(true), 200)
    const timeout = timeoutRef.current

    return () => window.clearInterval(timeout)
  }, [isMenuOpen])

  return { shouldShowButton, isMenuOpen, setIsMenuOpen }
}
