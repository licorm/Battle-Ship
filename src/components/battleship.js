
export default function BattleShip(props) {
  console.log(props)
  // const battleEach = props.battleShips.map((battleship) => {
  //   console.log(battleship)
  //   return <button id={battleship} className='BattleShip' onClick={props.onSelect(battleship)}>{battleship}</button>
  // })
  return (
    <div>
      {props.battleShips.includes('Carrier') && <button id='Carrier' className='BattleShip' onClick={() => props.onSelect('Carrier')}>Carrier</button> }
      {props.battleShips.includes('Destroyer') &&<button id='Destroyer' className='BattleShip' onClick={() => props.onSelect('Destroyer')}>Destroyer</button>}
      {props.battleShips.includes('Submarine') &&<button id='Submarine' className='BattleShip' onClick={() => props.onSelect('Submarine')}>Submarine</button>}
      {props.battleShips.includes('Battleship') &&<button id='Battle Ship' className='BattleShip' onClick={() => props.onSelect('Battle Ship')}>Battle Ship</button>}
      {props.battleShips.includes('Cruiser') &&<button id='Cruiser' className='BattleShip' onClick={() => props.onSelect('Cruiser')}>Cruiser</button>}
    </div>
  )
}