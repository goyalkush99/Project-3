import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="/Images/dices 1.png" alt="Dice image" />

      </div>
      <div className='content'>
        <h1>
          DICE GAME
        </h1>
        <Button onClick={toggle} >Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame
const Container = styled.div`
 max-width :1180px ;
 height: 100vh;
 display: flex;
margin: 0 auto;
align-items: center;

.content{
  h1{
    font-size: 96px;
    white-space: nowrap;
  }
}

`
const Button = styled.button`
  /* display: flex; */
/* width: 220px; */
padding: 10px 18px;
/* flex-direction: column;
justify-content: center; */
/* align-items: center; */
/* gap: 10px; */
border-radius: 5px;
background: #000;
color: white;
font-size: 16px;
border: none;
min-width: 220px;
border: 1px solid transparent;
transition: 0.3s background ease-in ;


&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.2s background ease-in ;
}

`