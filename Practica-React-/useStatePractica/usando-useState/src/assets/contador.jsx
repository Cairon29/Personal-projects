import { useState } from "react";

export const Contador = () => {
    const [counter, setCounter] = useState(0)
    console.log(counter)

    const sumador = () => {
        setCounter(counter + 2)
    }
    const reiniciar = () => {
        setCounter(0)
    }
    const factorial = () => {
        let result = 1;
        for (let i = 1; i <= counter; i++){
            result*=i
        }
        return result
    } 

    return(
        <section>
            <h2>
                Numero es: {counter}
            </h2>
            <h4>Factorial del numero es: {factorial()}</h4>
            <button onClick={sumador}> + 2</button>
            <button onClick={reiniciar}> Reiniciar </button>
        </section>
    )
}