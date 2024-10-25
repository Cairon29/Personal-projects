import { useState } from "react";

export const Logs = () => {
    // si la palabra tiene un numero par de caracteres tendra un color, si no, otro.
    const [text, setText] = useState()
    const handleText = (e) => {
        setText(e.target.value)
    }

    return(
        <section>
            <h2>Visualizador de texto</h2>
            <input placeholder="Palabra aqui" type="text" onChange={handleText} value={text} />
            <h4>{text}</h4>
        </section>
    )
}