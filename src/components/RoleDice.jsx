import { useState } from "react";
import styled from "styled-components";

const RoleDice = () => {
  const [currentDice, setCurrentDice] = useState();
  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min)
  };
  

  return (
    <DiceContainer>
      <div className="dice" onClick={() => generateRandomNumber(1, 7)}>
        <img src="\Images\Dice\dice_1.png" alt="roll dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
