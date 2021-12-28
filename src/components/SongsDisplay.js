import { Context } from "../context";
import { useContext,lazy, Suspense } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Song = lazy(() => import('./Song').then(module => ({ default: module.Song })));

export const SongsDisplay = () => {

    const { songs, searching } = useContext(Context);

    return (<div id="songsDisplay">
        <Suspense fallback={<CircularProgress thickness={4} size={40}/>}>
        {!searching ? (songs.length ?
            songs.map((song,i) => <Song key={i} song={song}/>)
        : "")
        :<CircularProgress thickness={4} size={40}/>}
        </Suspense>
    </div>)
}