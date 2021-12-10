import LandingPage from './components/landing';
import StartButton from './components/button';
import BattleGrid from './components/grid';
import { useEffect, useState } from 'react';
import './App.css'

//set constants for modes
const START = 'START';
const PLAY = 'PLAY';

const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const carrier = 5;
const battleship = 4;
const cruiser = 3;
const submarine = 3;
const destroyer = 2;

function App() {
const [state, setState] = useState({
  mode: START,
  player1: true,
  selected: []
})
console.log('state', state)
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
      </div>
      <h1>Player 2</h1>
        <div className={state.player1 ? "not" : "yourturn"}>
        <div className="grid-container">
          {fullGrid}
          </div>
        </div>
      </div>
        }
      
    </div>
  );
}

export default App;
