import LandingPage from './components/landing';
import StartButton from './components/button';
import BattleGrid from './components/grid';
import BattleShip from './components/battleship';
import { useEffect, useState } from 'react';
import './App.css'

//set constants for modes
const START = 'START';
const PLAY = 'PLAY';

const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Carrier = 5;
const Battleship = 4;
const Cruiser = 3;
const Submarine = 3;
const Destroyer = 2;

function App() {
const [state, setState] = useState({
  mode: START,
  player1: true,
  selected: []
})

const grid = [];
  for (const letter of column) {
    for (const number of row) {
      const square = `${letter}${number}`;
      grid.push(square);
    }
  }

  
  const onSelect = (id) => {
    const selected = [...state.selected];
    selected.push(id)
    setState((prev) => ({ ...prev, selected }));
  }

  const fullGrid = grid.map((square, index) => {
    return (
      <BattleGrid key={index} id={square} className="grid-item" selected={state.selected} onSelect={onSelect}/>
    )
  })

const onClick = () => {
  setState((prev) => ({ ...prev, mode: PLAY }));
}

  return (
    <div className="App">
      {state.mode === START && 
      <div>
        <LandingPage></LandingPage>
        <StartButton onClick={onClick}/>
      </div>
      }
      {state.mode === PLAY &&
      <div>
        <h1>Player 1</h1>
      <div className={state.player1 ? "yourturn" : "not"}>
      <div className="grid-container">
        {fullGrid}
        </div>
        <h1>Battle Ships</h1>
        <BattleShip/>
      </div>
      <h1>Player 2</h1>
        <div className={state.player1 ? "not" : "yourturn"}>
        <div className="grid-container">
          {fullGrid}
          </div>
        <h1>Battle Ships</h1>
        <BattleShip/>
        </div>
      </div>
        }
      
    </div>
  );
}

export default App;
