import LandingPage from './components/landing';
import StartButton from './components/button';
import BattleGrid from './components/grid';
import { useEffect, useState } from 'react';

//set constants for modes
const START = 'START';
const PLAY = 'PLAY';

function App() {
const [state, setState] = useState({
  mode: START
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
        <BattleGrid />
      </div>
        }
      
    </div>
  );
}

export default App;
