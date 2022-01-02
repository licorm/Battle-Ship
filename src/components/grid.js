import '../grid.css'
import { useEffect, useState } from 'react';


export default function BattleGrid(props) {
  
  const [selected, setSelected] = useState(false);
  
  //use effect is triggered when the selected IDs change, in order to toggle selected  
    useEffect(() => {
      
        if(!selected) {
          //the selected product array must include this specific ID to trigger changes
          if (props.selected.includes(props.id)) {
            setSelected(true);
            // props.handleSelect(true, props.id, props);
            console.log(document.getElementById(props.id))
            document.getElementById(props.id).style.color = "red";
          }
        } 
        //for unselecting toggle
        if (!props.selected.includes(props.id)) {
          setSelected(false)
          document.getElementById(props.id).style.color = "#989898";
        }
    }, [props.selected]);


  return (
    <div >
      <button key={props.index} id={props.id} className="grid-item" onClick={() => {props.onSelect(props.id)}}>{props.id}</button>
    </div>
  )
}