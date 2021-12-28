import { toast } from 'react-toastify';
import { Context } from '../context';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = () => {

    const { setSongs, setNextUrl, setSearching, dummy } = useContext(Context);

    const apiURL = 'https://api.lyrics.ovh';

    const handleSearch = e => {
        e.preventDefault();
        if(!e.target.query.value)return toast.error('Please enter a song/artist');
        setSongs([]);
        setNextUrl(null);
        setSearching(true);

        fetch(`${apiURL}/suggest/${e.target.query.value}`)
        .then(res => res.json())
        .then(data => {
            setSongs(data.data)
            setNextUrl(data.next)
            setSearching(false);
            dummy.current.scrollIntoView({behavior: 'smooth'});
        })
    }

    return (<div id="searchbar">
        <form onSubmit={e => handleSearch(e)}>
            <TextField
                placeholder="Search for a song/artist"
                margin="dense"
                type="text"
                fullWidth
                variant="standard"
                name='query'
                autoComplete='off'
                autoFocus
                sx={{input:{color:"white", padding:"10px"}}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton type="submit">
                                <SearchIcon sx={{color:"white"}} />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </form>
    </div>)
}