import { lazy, Suspense, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Context } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = lazy(() => import('./pages/Main').then(module => ({default:module.Main})));
const Lyrics = lazy(() => import('./pages/Lyrics').then(module => ({default:module.Lyrics})));

function App() {

  const [songs, setSongs] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [searching, setSearching] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Context.Provider value={{
            songs, setSongs, nextUrl, setNextUrl, searching, setSearching
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
      </div>
    </HashRouter>
  );
}

export default App;
