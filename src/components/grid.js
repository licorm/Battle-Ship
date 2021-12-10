import '../grid.css'



export default function BattleGrid(props) {
  
  return (
    <div className="grid-container">
      {props.fullGrid}
    </div>
  )
}