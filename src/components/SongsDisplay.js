import { Context } from "../context";
import { useContext,lazy, Suspense } from "react";

const Song = lazy(() => import('./Song').then(module => ({ default: module.Song })));

export const SongsDisplay = () => {

    const { songs } = useContext(Context);

    return (<div id="songsDisplay">
        <Suspense fallback={<h1>Loading...</h1>}>
        {songs.length ?
            songs.map((song,i) => <Song key={i} song={song}/>)
        : "Search for songs to get started!"}
        </Suspense>
    </div>)
}