import React from "react"
import Layout from "../../components/Layout"

export default function ProjectDetails({ pageContext }) {
  return (
    <Layout>
      <div>{pageContext.project.title}!</div>
    </Layout>
  )
}
