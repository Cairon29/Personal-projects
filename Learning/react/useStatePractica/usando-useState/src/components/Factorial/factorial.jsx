import { useState } from "react"
import { DisplayFactorial } from "./displayFactorial"

export const Factorial = () => {

    const [counter, setCounter] = useState(0)

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
  return (
    <DisplayFactorial
        total={counter}
        hdlAdd={sumador}
        hdlRest={reiniciar}
        hdlFacto={factorial}
    />
  )
}
