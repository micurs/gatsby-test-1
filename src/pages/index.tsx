import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import { Body } from "../components/basic"

export default function Home() {
  return (
    <>
      <Header />
      <Body>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <Link to="/about/">About this site</Link>
      </Body>
    </>
  )
}
