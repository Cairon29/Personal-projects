import { useState } from "react"
import { DisplayCounter } from "./displayCounter"

export const TextCounter = () => {
    
    const [text, setText] = useState('')
    const handlerText = (e) => {
        setText(e.target.value)
    }
    
    let characterArray = text.split('');
    let contador = characterArray.length;
    return (
        <DisplayCounter 
            count={contador}
            hdlText={handlerText}
        />
    )
}
