import React from "react"
import Layout from "../components/Layout"

export default function About({ location }) {
  return (
    <Layout href={location.href}>
      <div>About</div>
    </Layout>
  )
}
