import type { JSX } from "react"
import { type HdlValues, type HdlFunctions } from "../types/Form"

interface Props {
    hdlValues: HdlValues
    hdlFunctions: HdlFunctions
    children: React.ReactNode
}

export const Form = ({ hdlValues, hdlFunctions, children }: Props):React.ReactNode => {
    return (
        <>
            {children}
            <form onSubmit={hdlFunctions.hdlSubmit} action="">
                <label htmlFor="text">text input</label>
                <input 
                    name="text"
                    type="text"
                    value={hdlValues.text}
                    onChange={hdlFunctions.hdlText} 
                />
                <br />
                <label htmlFor="number">Number input</label>
                <input 
                    name="number"
                    type="number" 
                    value={hdlValues.number}
                    onChange={hdlFunctions.hdlNumber}
                />
                <br />
                <button type="submit">Print</button>
            </form>
        </>
    )
}
