import { toast } from 'react-toastify';
import { Context } from '../context';
import { useContext } from 'react';

export const Searchbar = () => {

    const { setSongs, setNextUrl } = useContext(Context);

    const apiURL = 'https://api.lyrics.ovh';

    const handleSearch = e => {
        e.preventDefault();
        if(!e.target.query.value)return toast.error('Please enter a song/artist');

        fetch(`${apiURL}/suggest/${e.target.query.value}`)
        .then(res => res.json())
        .then(data => {
            setSongs(data.data)
            setNextUrl(data.next)
        })
    }

    return (<div id="searchbar">
        <form onSubmit={e => handleSearch(e)}>
            <input type="text" name="query" autoComplete='off' autoFocus/>
            <input type="submit" value="Search"/>
        </form>
    </div>)
}