import { Context } from "../context"
import { useContext } from "react"
import Button from '@mui/material/Button';

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

    return (<div id="loadMore">
        <Button onClick={(e) => handleLoadMore(e)}>Load More</Button>
    </div>)
}