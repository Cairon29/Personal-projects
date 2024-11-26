import { createContext, useId } from "react";

export const YoutuberContext = createContext();

export const YoutuberProvider = ({ children }) => {
    const gpId = useId();
    const gp = [
        {playlist: 'Design patterns in Typescript', length: 6, id: gpId},
        {playlist: 'React Ultimate class. From 0 to expert', length: 17, id: gpId},
        {playlist: 'Angular: From 0 to expert', length: 24, id: gpId},
        {playlist: 'NextJs: From 0 with Tuti', length: 12, id: gpId},
        {playlist: 'Hexagonal Architecture', length: 8, id: gpId}
    ];

    const Midu = [
        {playlist: 'Technical interview for web programmers', length: 15, id: gpId},
        {playlist: 'Live coding', length: 6, id: gpId},
        {playlist: 'Free bootcamp fullstack Js', length: 55, id: gpId},
        {playlist: 'CSS from 0', length: 4, id: gpId},
        {playlist: 'NodeJS course from 0', length: 7, id: gpId}
    ];

    return (
        <YoutuberContext.Provider value={{gp, Midu}}>
            {children}
        </YoutuberContext.Provider>
    )
}