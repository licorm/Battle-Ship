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
  selected: [],
  currentSelection: [],
  battleShips: ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']
})


const grid = [];
  for (const letter of column) {
    for (const number of row) {
      const square = `${letter}${number}`;
      grid.push(square);
    }
  }

  
  const onSelect = (id) => {
    if (!state.selected.includes(id) && !state.currentSelection.includes(id)) {
      const selected = [...state.selected];
      selected.push(id);
      const currentSelection = [...state.currentSelection];
      currentSelection.push(id);
      setState((prev) => ({ ...prev, selected, currentSelection }));
    }
    const selected = [];
    if (state.selected.includes(id)) {
      const newSelected = [...state.selected];
      
      
      for (const ids of newSelected) {
        console.log('ids', ids)
        if (ids !== id) {
          selected.push(ids);
        }
      }
      
      setState((prev) => ({ ...prev, selected }));
    }
    
  }

  function checkArrayEqualElements(_array)
{
   if(typeof _array !== 'undefined')    
  {
   return !!_array.reduce(function(a, b){ return (a === b) ? a : NaN; });
  }
  return "Array is Undefined";
}

  const chooseShip = function(shipID) {
    console.log(shipID)
    const selectedOne = [];
    const selectedTwo = [];
    for (const selected of state.currentSelection) {
      selectedOne.push(selected[0]);
      selectedTwo.push(selected[1]);
    }
    
    if (checkArrayEqualElements(selectedOne) || checkArrayEqualElements(selectedTwo)) {
      
      if (state.currentSelection.length === Carrier && shipID === 'Carrier') {
        const oldBattleShips = [...state.battleShips];
        const battleShips = [];
        for (const battleship of oldBattleShips) {
          if (battleship !== 'Carrier') {
             battleShips.push(battleship);
          }
        }
        const currentSelection = [];
        setState((prev) => ({ ...prev, battleShips, currentSelection }));
      }
      if (state.currentSelection.length === Destroyer && shipID === 'Destroyer') {
        const oldBattleShips = [...state.battleShips];
        const battleShips = [];
        for (const battleship of oldBattleShips) {
          if (battleship !== 'Destroyer') {
             battleShips.push(battleship);
          }
        }
        const currentSelection = [];
        setState((prev) => ({ ...prev, battleShips, currentSelection }));
      }
      if (state.currentSelection.length === Submarine && shipID === 'Submarine') {
        console.log(state.currentSelection)
        const oldBattleShips = [...state.battleShips];
        const battleShips = [];
        for (const battleship of oldBattleShips) {
          if (battleship !== 'Submarine') {
             battleShips.push(battleship);
          }
        }
        const currentSelection = [];
        setState((prev) => ({ ...prev, battleShips, currentSelection }));
      }
      if (state.currentSelection.length === Battleship && shipID === 'Battle Ship') {
        const oldBattleShips = [...state.battleShips];
        const battleShips = [];
        for (const battleship of oldBattleShips) {
          if (battleship !== 'Battleship') {
             battleShips.push(battleship);
          }
        }
        const currentSelection = [];
        setState((prev) => ({ ...prev, battleShips, currentSelection }));
      }
      if (state.currentSelection.length === Cruiser && shipID === 'Cruiser') {
        const oldBattleShips = [...state.battleShips];
        const battleShips = [];
        for (const battleship of oldBattleShips) {
          if (battleship !== 'Cruiser') {
             battleShips.push(battleship);
          }
        }
        const currentSelection = [];
        setState((prev) => ({ ...prev, battleShips, currentSelection }));
      }
    }

    if (state.battleShips.length === 1) {
      const player1 = !(state.player1);
      const battleShips = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
      setState((prev) => ({ ...prev, player1, battleShips }));
    }
    
  }

  const fullGrid = grid.map((square, index) => {
    
    return (
      <BattleGrid key={index} id={index} name={square} className="grid-item" selected={state.selected} onSelect={onSelect}/>
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
        <BattleShip
        onSelect={chooseShip}
        battleShips={state.battleShips}
        />
      </div>
      <h1>Player 2</h1>
        <div className={state.player1 ? "not" : "yourturn"}>
        <div className="grid-container">
          {fullGrid}
          </div>
        <h1>Battle Ships</h1>
        <BattleShip
          onSelect={chooseShip}
          battleShips={state.battleShips}
        />
        </div>
      </div>
        }
      
    </div>
  );
}

export default App;
