
export default function BattleShip(props) {

  

  const battleEach = props.battleShips.map((battleship) => {
    return <button className='BattleShip' onClick={props.onSelect}>{battleship}</button>
  })
  return (
    <div>
      {battleEach}
    </div>
  )
}