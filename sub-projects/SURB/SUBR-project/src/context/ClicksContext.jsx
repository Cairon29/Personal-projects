import { createContext, useState } from "react";

export const globalClicks = createContext();

export const ClicksContext = ({ children }) => {
    const [clicks, setClicks] = useState(0);

    const incrementClicks = () => {
        setClicks(clicks + 1);
    }
    return (
        <globalClicks.Provider value={{ clicks, incrementClicks }}>
            {children}
        </globalClicks.Provider>
    )
}
