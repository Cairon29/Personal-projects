import { useState } from "react";

export const Ocultar = () => {
    
    const [visible, setVisible] = useState(false)
    const mostrar = () => setVisible(!visible)

    /* Tambien es posible esta opcion en la validacion de texto: */
// {visible && <p>Toggle me!</p>}
    const text = visible ? '⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖': ''
    return (
        <section>
            <button onClick={mostrar}> E S C O N D E L O __&__ M U E S T R A L O</button>
            <h1>{text}</h1>
        </section>
    )
}

