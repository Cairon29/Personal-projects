import { createContext, useId } from "react";

export const YoutuberContext = createContext();

export const YoutuberProvider = ({ children }) => {
    const youtuberId = useId();
    const gp = [
        {playlist: 'Design patterns in Typescript', length: 6, id: youtuberId},
        {playlist: 'React Ultimate class. From 0 to expert', length: 17, id: youtuberId},
        {playlist: 'Angular: From 0 to expert', length: 24, id: youtuberId},
        {playlist: 'NextJs: From 0 with Tuti', length: 12, id: youtuberId},
        {playlist: 'Hexagonal Architecture', length: 8, id: youtuberId}
    ];

    const MiduDev = [
        {playlist: 'Technical interview for web programmers', length: 15, id: youtuberId},
        {playlist: 'Live coding', length: 6, id: youtuberId},
        {playlist: 'Free bootcamp fullstack Js', length: 55, id: youtuberId},
        {playlist: 'CSS from 0', length: 4, id: youtuberId},
        {playlist: 'NodeJS course from 0', length: 7, id: youtuberId}
    ];
    const MoureDev = [
        {playlist: 'React Ultimate class. From 0 to expert', length: 17, id: youtuberId},
        {playlist: 'Angular: From 0 to expert', length: 24, id: youtuberId},
        {playlist: 'NextJs: From 0 with Tuti', length: 12, id: youtuberId},
        {playlist: 'Hexagonal Architecture', length: 8, id: youtuberId },
        {playlist: 'Technical interview for web programmers', length: 15, id: youtuberId}
    ]

    return (
        <YoutuberContext.Provider value={{gp, MiduDev, MoureDev}}>
            {children}
        </YoutuberContext.Provider>
    )
}