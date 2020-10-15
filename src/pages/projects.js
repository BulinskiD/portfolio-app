import React from "react"
import Layout from "../components/Layout"

export default function Projects({ location }) {
  return (
    <Layout href={location.href}>
      <div>Projects</div>
    </Layout>
  )
}
