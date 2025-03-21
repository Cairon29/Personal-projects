import { useState } from "react";
import { DisplayTime } from "./displayTime"

export const TimeActive = () => {

    const [segundos, setsegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    const reloj = () => {
        setsegundos(segundos + 1);
    }
    setTimeout(reloj,1000)

    const handleMinutes = () => {
        if (segundos == 59) {
            setTimeout(() => {
                setsegundos(0);
                setMinutos(minutos + 1);
            }, 1000)
        }
    }
    handleMinutes();

    const handleHours = () => {
        if (minutos == 59) {
            setTimeout(() => {
                setMinutos(0);
                setHoras(horas + 1);
            }, 1000)
        }
    }


    handleHours();

    return (
        <DisplayTime h={horas} min={minutos} secs={segundos} />
    )
}
