import { useContext } from "react";
import { YoutuberContext } from "../../context/youtuber-context";

export const Playlists = () => {
    const { gp } = useContext(YoutuberContext);
    console.log(gp)
    return (
    <>
        <ul>
            <li>Playlist 1</li>
        </ul>
    </>
    )
}
