import { useContext } from "react"
import { YoutuberContext } from "../../context/youtuber-context";


export const Playlists = () => {

    const { MiduDev } = useContext(YoutuberContext);
    return (
        <ul>
            { MiduDev.map((playlist) => (
                <li key={playlist.id}>
                    {playlist.playlist}
                    <p><b>Length:</b> {playlist.length}</p>
                </li>
            ))}
        </ul>
    )
}
