import React from "react"
import Layout from "../components/Layout"
import Tools from "../components/About/Tools"
import MainInfo from "../components/About/MainInfo"
import Certificates from "../components/About/Certificates"

export default function About({ location }) {
  return (
    <Layout BackgroundComponent={() => <div />} href={location.href}>
      <MainInfo />
      <Tools />
      <Certificates />
    </Layout>
  )
}
