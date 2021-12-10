
export default function BattleShip(props) {

  const battleShips = ['Carrier', 'BattleShip', 'Cruiser', 'Submarine', 'Destroyer'];

  const battleEach = battleShips.map((battleship) => {
    return <button className='BattleShip'>{battleship}</button>
  })
  return (
    <div>
      {battleEach}
    </div>
  )
}