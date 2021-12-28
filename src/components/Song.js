import { useNavigate } from "react-router-dom";

export const Song = (props) => {

    const navigate = useNavigate();

    const { title } = props.song;
    const { name } = props.song.artist;
    const { cover } = props.song.album;

    const toLyrics = () => {
        navigate(`/lyrics/${title}/${name}`)
    }

    return (<div className="song" onClick={toLyrics}>
        <img src={cover} alt={title}/>
        <p>{title} - {name}</p>
    </div>)
}