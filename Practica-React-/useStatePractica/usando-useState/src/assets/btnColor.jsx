import { useState } from "react";
import { useEffect } from "react";
import '../estilos/botones.css'
// Azul amarillo verde negro vinotinto
export const BotonColor = () => {

    // mis use states
    const [colorId, setColorId] = useState(0)
    const [color, setColor] = useState('greenChart')

   
  
    const cambioColor = () => {
        setColorId(colorId + 1);
        // console.log(colorId)
    }  

    useEffect(() =>{
        // switch(colorId){
        //     case colorId == 0:
        //         () => setColor('blackChart')
        //         break
        //     case colorId == 1:
        //         () => setColor('yellowChart')
        //         break
        //     case colorId == 2:
        //         () => setColor('redWineChart')
        //         break
        //     case colorId == 3:
        //         () => setColor('blueChart') 
        //         break
        //     case colorId == 4:
        //         () => setColor('greenChart') 
        //         break
        //     case colorId == 5:
        //         colorId - 5
        //         break
        // }
        
        if (colorId === 0) setColor('greenChart')
        if (colorId === 1) setColor('blackChart')
        if (colorId === 2) setColor('yellowChart')
        if (colorId === 3) setColor('redWineChart')
        if (colorId === 4) setColor('blueChart')
        if (colorId === 5) setColorId(0)
      
    },[colorId,cambioColor]);

    return (
        <section>
            <button onClick={cambioColor}>C O L O R E S</button>
            <div className={color}></div>
        </section>
    )
}


