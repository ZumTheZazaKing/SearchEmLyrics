import { Context } from "../context"
import { useContext } from "react"

export const LoadMore = () => {

    const { nextUrl, setNextUrl, setSongs, songs } = useContext(Context);

    const handleLoadMore = e => {
        e.target.innerText = "Loading...";
        const baseUrl = "https://cors-anywhere.herokuapp.com/";
        fetch(`${baseUrl}${nextUrl}`)
        .then(res => res.json())
        .then(data => {
            setNextUrl(data.next);
            setSongs([...songs, ...data.data]);
            e.target.innerText = "Load More";
        })
    }

    return (<div id="loadMore" onClick={(e) => handleLoadMore(e)}>
        <button>Load More</button>
    </div>)
}