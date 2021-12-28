import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Lyrics = () => {

    const { song, artist } = useParams();
    const [lyrics, setLyrics] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        document.title = `${song} | ${artist}`;

        fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(res => {
            if(res.ok) return res.json();
            else return setLyrics("Lyrics not found");
        })
        .then(data => setLyrics(data.lyrics))

    },[song, artist])

    return (<div id="Lyrics">
        <button onClick={() => navigate("/")}>Back</button>
        <h2>{song} - {artist}</h2>
        <p style={{whiteSpace:"pre-wrap"}}>{lyrics}</p>
    </div>)
}