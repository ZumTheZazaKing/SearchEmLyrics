import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

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
        <br/>
        <Button onClick={() => navigate("/")}>MAIN PAGE</Button>
        <br/>
        <h2>{song} - {artist}</h2>
        <br/>
        <p style={{whiteSpace:"pre-wrap"}}>
            {lyrics ? lyrics : "Loading..."}
        </p>
    </div>)
}