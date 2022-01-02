
export default function BattleShip(props) {

  

  const battleEach = props.battleShips.map((battleship) => {
    return <button id={battleship} className='BattleShip' onClick={(battleship) => props.onSelect(battleship)}>{battleship}</button>
  })
  return (
    <div>
      {battleEach}
    </div>
  )
}