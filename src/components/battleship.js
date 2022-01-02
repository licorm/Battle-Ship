
export default function BattleShip(props) {
  console.log(props)
  // const battleEach = props.battleShips.map((battleship) => {
  //   console.log(battleship)
  //   return <button id={battleship} className='BattleShip' onClick={props.onSelect(battleship)}>{battleship}</button>
  // })
  return (
    <div>
      {props.battleShips.includes('Carrier') && <button id='Carrier' className='BattleShip' onClick={() => props.onSelect()}>Carrier</button> }
      {props.battleShips.includes('Destroyer') &&<button id='Destroyer' className='BattleShip' onClick={() => props.onSelect()}>Destroyer</button>}
      <button id='Submarine' className='BattleShip' onClick={() => props.onSelect()}>Submarine</button>
      <button id='Battle Ship' className='BattleShip' onClick={() => props.onSelect()}>Battle Ship</button>
      <button id='Cruiser' className='BattleShip' onClick={() => props.onSelect()}>Cruiser</button>
    </div>
  )
}