import { useContext } from "react";
import { YoutuberContext } from "../../context/youtuber-context";

export const Playlists = () => {
    const { gp } = useContext(YoutuberContext);
    return (
        <ul>
            {gp.map((course) => (
                <li key={gp.id}>
                    <p>
                        {course.playlist}  
                        <b>Length:</b> {course.length}
                    </p>
                </li>
            ))}
        </ul>
    )
}
