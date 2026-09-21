import { useState } from "react"
import "./ColorPicker.css"
function ColorPicker(){

    const [color,setColor] = useState("#ffffff");

    function ChangeColor(event){
        setColor(event.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color : {color}</p>
            </div>
              <label>Select a Color </label>
                <input type="color" value={color} onChange={ChangeColor}/>
        </div>
    )
}
export default ColorPicker