import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState(" ");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
    setError("");
  };

  const toggle = ()=>{
    setShowRules((prev)=>!prev)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={toggle}>{showRules?"Hide":"Show Rules"} </Button>
      </div>

      { showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  }
`;
