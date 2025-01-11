import { useState } from "react"
import { DisplayHidden } from "./displayHidden"

export const HiddenText = () => {
    const [visible, setVisible] = useState(false)
    const mostrar = () => setVisible(!visible)
    const text = visible ? '⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖': 'Toggle me!'
    return (
        <DisplayHidden
            show={mostrar}
            text={text}
        />
    )
}
