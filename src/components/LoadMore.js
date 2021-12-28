import { Context } from "../context"
import { useContext } from "react"

export const LoadMore = () => {

    const { nextUrl, setNextUrl, setSongs, songs } = useContext(Context);

    const handleLoadMore = () => {
        const baseUrl = "https://cors-anywhere.herokuapp.com/";
        fetch(`${baseUrl}${nextUrl}`)
        .then(res => res.json())
        .then(data => {
            setNextUrl(data.next);
            setSongs([...songs, ...data.data]);
        })
    }

    return (<div id="loadMore" onClick={() => handleLoadMore()}>
        <button>Load More</button>
    </div>)
}