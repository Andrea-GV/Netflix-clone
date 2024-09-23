import './styles/pages/App.scss';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import { Routes, Route } from 'react-router-dom';
import Player from './pages/Player.jsx';

// import Row from './Row.jsx'
// import requests from './requests.jsx';
// import Banner from './Banner.jsx';
// import Nav from './components/Nav.jsx';
// import Footer from './components/Footer.jsx';

function App() {


  return (
    // <div className="Ap1">
    //   <Home/>
    // </div>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      {/* <Nav/>
      <Banner/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Today" fetchUrl={requests.fetchTrendingDay} />
      <Row
        title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
       */}
      {/* TRYING NEW THINGS */}
       {/* <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer/> */}
      
    </div>
  )
}

export default App;
