import { useState } from "react";
import { TextDisplay } from "./textDisplay";

export const RealTimeText = () => {
    // si la palabra tiene un numero par de caracteres tendra un color, si no, otro.
    const [text, setText] = useState()
    const handleText = (e) => {
        setText(e.target.value)
    }

    return(
        <TextDisplay
            text={text}
            hdlText={handleText}
        />
    )
}