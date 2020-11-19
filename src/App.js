import React, { useState } from "react";
import "./App.css";
import Pizza from "./pizza.png";
import Burger from "./burger.png";

import { tada } from "react-animations";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const bounceAnimation = keyframes`${tada}`;

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
`;

const Food = styled.div`
  animation: 1s ${bounceAnimation};
  max-width: 200px;
`;

function App() {
  const [randomNum, setRandomNum] = useState(0);

  const [disable, setDisabled] = useState(false);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * 2) + 1);
  };

  const handleResetNum = () => {
    setRandomNum(0);
  };

  const handleSetDisabled = () => {
    setDisabled(!disable);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza or Burger?</h1>
        <p>Hungry? Cant decide? Let us help you.</p>
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
    </div>
  );
}

export default App;
