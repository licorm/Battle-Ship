const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function BattleGrid(props) {
  const grid = [];
  for (const letter of column) {
    for (const number of row) {
      const square = `${letter}${number}`;
      grid.push(square);
    }
  }

  const fullGrid = grid.map((square) => {
    return (
      <div>{square}</div>
    )
  })
  return (
    fullGrid
  )
}