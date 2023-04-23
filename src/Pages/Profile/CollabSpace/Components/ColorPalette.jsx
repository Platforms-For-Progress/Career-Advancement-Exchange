import React from "react";
import "./ColorPalette.css";
import { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPalette = ({setColors, colors}) => {
    
    const [color, setColor] = useState();

    const [colorPickerActive, setColorPickerActive] = useState(false);
    const activateColorPicker = () => {
        if (colorPickerActive) {
            console.log(color)
            setColors([...colors, color]);
        }
        setColorPickerActive(!colorPickerActive);
        console.log(colors);
    }
    const handleColorChange = (color) => {
        console.log(color.hex)
        setColor(color.hex);
        
        
    }
    return (
       
        <div className="color-palette">
        <i class="uil uil-plus-circle" onClick= {activateColorPicker}></i>
        {colorPickerActive ? <ChromePicker color={color} onChange={handleColorChange} /> : null}
        {colors.map((color) => {
            // log the color
            console.log(color);
            return <div className="colorItem" style={{backgroundColor: color}}></div>

        })
        }
        </div>
    )
}

export default ColorPalette;