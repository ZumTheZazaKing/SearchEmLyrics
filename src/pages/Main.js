import { Searchbar } from "../components/Searchbar";
import { LoadMore } from "../components/LoadMore";
import { lazy, Suspense, useContext, useEffect } from "react";
import { Context } from "../context";


const SongsDisplay = lazy(() => import('../components/SongsDisplay').then(module => ({default:module.SongsDisplay})));

export const Main = () => {

    const { nextUrl, dummy } = useContext(Context);

    useEffect(() => {
        document.title = "SearchEmLyrics";
    },[]);

    return (<div id="Main">
        <div id="header">
            <div id="header-content">
                <h1>SearchEmLyrics</h1>
                <br/>
                <Searchbar/>
            </div>
        </div>
        <div id="body">
            <div ref={dummy}></div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <SongsDisplay/>
            </Suspense>
            {nextUrl && <LoadMore>Load More</LoadMore>}
        </div>
    </div>)
}