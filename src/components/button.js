export default function StartButton(props) {
  return (
    <div className="startButton">
      <button onClick={props.onClick}>
        Start Game
      </button>
    </div>
  );
}