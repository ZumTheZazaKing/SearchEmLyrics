import { lazy, Suspense, useState, useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Context } from './context';
import { ToastContainer } from 'react-toastify';
import BackToTop from "react-back-to-top-button";
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Main = lazy(() => import('./pages/Main').then(module => ({default:module.Main})));
const Lyrics = lazy(() => import('./pages/Lyrics').then(module => ({default:module.Lyrics})));

function App() {

  const [songs, setSongs] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [searching, setSearching] = useState(false);
  const dummy = useRef();

  return (
    <HashRouter>
      <div className="App">
        <Suspense fallback={<div className="loading"><CircularProgress thickness={5} disableShrink size={60}/></div>}>
          <Context.Provider value={{
            songs, setSongs, nextUrl, setNextUrl, searching, setSearching, dummy
          }}>
            <Routes>

              <Route exact path="/" element={<Main/>}/>
              <Route path ="lyrics/:song/:artist" element={<Lyrics/>}/>

            </Routes>
            <ToastContainer
              position="bottom-left"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Context.Provider>
        </Suspense>
        <BackToTop
          showOnScrollUp
          showAt={100}
          speed={500}
        >
          <KeyboardArrowUpIcon id="backToTop"/>
        </BackToTop>
      </div>
    </HashRouter>
  );
}

export default App;
