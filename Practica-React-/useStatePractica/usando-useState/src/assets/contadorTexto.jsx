import { useState } from "react";

export const ContadorTexto = () => {

    const [text, setText] = useState('')

    const handlerText = (e) => {
        setText(e.target.value)
    }
    
    let characterArray = text.split('');
    let contador = characterArray.length;

    return (
        <section>
            <h2>Contador de texto</h2>
            <input type="text" onChange={handlerText} />
            <p>Character count: {contador}</p>
        </section>
    )
}