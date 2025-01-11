import { useState, useEffect } from "react";
import { Square } from "./square";
import './botones.css'

export const ColorfulSquare = () => {
    const [colorId, setColorId] = useState(0)
    const [color, setColor] = useState('greenChart')

    const cambioColor = () => {
        setColorId(colorId + 1);
    }  
    useEffect(() =>{
        if (colorId === 0) setColor('greenChart')
        if (colorId === 1) setColor('blackChart')
        if (colorId === 2) setColor('yellowChart')
        if (colorId === 3) setColor('redWineChart')
        if (colorId === 4) setColor('blueChart')
        if (colorId === 5) setColorId(0)
    },[colorId,cambioColor]);

    return (
        <Square handleBtn={cambioColor} style={color}/>
    )
}
