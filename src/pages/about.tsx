import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header />
      <h2>About Gatsby</h2>
      <p>Such wow. Very React.</p>
      <Link to="/">Back home ...</Link>
    </div>
  )
}
