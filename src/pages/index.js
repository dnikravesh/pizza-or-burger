import React, { useState } from "react"
import { tada } from "react-animations"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

import SEO from "../components/seo"

import Pizza from "../images/pizza.png"
import Burger from "../images/burger.png"
import Github from "../images/github.png"

const bounceAnimation = keyframes`${tada}`

const Button = styled.button`
  padding: 16px;
  background-color: #e74c3c;
  font-size: 24px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  border: none;
  margin: 8px;
  cursor: pointer;
  &:hover {
    background-color: #cb4335;
  }
`

const Food = styled.div`
  animation: 1s ${bounceAnimation};
  max-width: 200px;
`

const IndexPage = () => {
  const [randomNum, setRandomNum] = useState(0)

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 2) + 1)
  }

  const handleResetNum = () => {
    setRandomNum(0)
  }

  return (
    <div>
      <SEO title="Home" />
      <div className="App">
        <header className="App-header">
          <h1>Pizza or Burger?</h1>
          {randomNum === 0 ? (
            <p style={{ maxWidth: "500px" }}>
              Hungry? Can't decide?
              <br /> Let us help.
            </p>
          ) : (
            <p style={{ maxWidth: "500px" }}>
              Enjoy!
              <br />
              <span style={{ fontSize: "20px" }}>
                Not feeling it? Reset below.
              </span>
            </p>
          )}
          <div>
            {randomNum === 0 ? (
              <Button onClick={handleRandomNum}>Give me food!</Button>
            ) : (
              <Button onClick={handleResetNum}>Reset</Button>
            )}
          </div>
          <p style={{ height: "50px" }}>
            {randomNum === 1 && (
              <Food>
                <img src={Pizza} alt="Pizza" style={{ width: "100%" }} />
              </Food>
            )}
            {randomNum === 2 && (
              <Food>
                <img src={Burger} alt="Burger" style={{ width: "100%" }} />
              </Food>
            )}
          </p>
        </header>
        <div
          style={{
            position: "fixed",
            bottom: "0px",
            right: "0px",
            margin: "10px",
            width: "25px",
          }}
        >
          <a
            href="https://github.com/dnikravesh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#808B96" }}
          >
            <img src={Github} alt="GitHub" style={{ width: "100%" }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
