import React, { useState } from 'react';

function Dice() {
  const [number, setNumber] = useState(null);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
  };

  return (
    <div
      style={{
        display: 'inline-block',
        margin: '10px',
        width: '50px',
        height: '50px',
        border: '1px solid black',
        textAlign: 'center',
        lineHeight: '50px',
        cursor: 'pointer',
      }}
      onClick={rollDice}
    >
      {number}
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="app-container"></div>
      <h1>Dice</h1>
       <div className="dice-row">
        <Dice />
        <Dice />
        <Dice />
      </div>
    </div>
  );
}

export default App;
