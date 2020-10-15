import React from "react"
import Layout from "../components/Layout"

export default function Contact({ location }) {
  return (
    <Layout href={location.href}>
      <div>Contact</div>
    </Layout>
  )
}
