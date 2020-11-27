import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Header from "../components/header"
import { Body } from "../components/basic"

const AboutImpl = ({ className }) => {
  return (
    <>
      <Header />
          <Body className={className}>
            <h2>About Gatsby</h2>
            <p>Such wow. Very React.</p>
            <Link to="/">Back home ...</Link>
          </Body>
    </>
  )
}


const About = styled(AboutImpl)`
  color: teal;
  h2 {
    color: blue;
  }
`

export default About

