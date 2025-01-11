import { useContext } from "react"
import { YoutuberContext } from "../../context/youtuber-context";


export const Playlists = () => {

    // Pending for translation
    const { MoureDev } = useContext(YoutuberContext);
    return (
        <ul>
            { MoureDev.map((playlist) => (
                <li key={playlist.id}>
                    {playlist.playlist}
                    <p><b>Length:</b> {playlist.length}</p>
                </li>
            ))}
        </ul>
    )
}