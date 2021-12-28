import { Searchbar } from "../components/Searchbar";
import { LoadMore } from "../components/LoadMore";
import { lazy, Suspense, useContext, useEffect } from "react";
import { Context } from "../context";


const SongsDisplay = lazy(() => import('../components/SongsDisplay').then(module => ({default:module.SongsDisplay})));

export const Main = () => {

    const { nextUrl } = useContext(Context);

    useEffect(() => {
        document.title = "SearchEmLyrics";
    },[]);

    return (<div id="Main">
        <Searchbar/>
        <Suspense fallback={<h1>Loading...</h1>}>
            <SongsDisplay/>
        </Suspense>
        <br/>
        {nextUrl && <LoadMore>Load More</LoadMore>}
        <br/>
    </div>)
}