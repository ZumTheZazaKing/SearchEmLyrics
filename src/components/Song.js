import { useNavigate } from "react-router-dom";

export const Song = (props) => {

    const navigate = useNavigate();

    const { title } = props.song;
    const { name } = props.song.artist;
    const { cover } = props.song.album;

    const toLyrics = () => {
        navigate(`/lyrics/${title}/${name}`)
    }

    return (<div onClick={toLyrics}>
        <img width={50} height={50} src={cover} alt={title}/>
        <h2>{title} - {name}</h2>
    </div>)
}