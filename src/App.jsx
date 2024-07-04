import '././styles/App.scss'
import Row from './Row.jsx'
import requests from './requests.jsx';
import Banner from './Banner.jsx';
import Nav from './Nav.jsx';
function App() {


  return (
    <div className='App'>
      <Nav/>
      <Banner/>

      <Row
        title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Today" fetchUrl={requests.fetchTrendingDay} />
      
      {/* TRYING NEW THINGS */}
       <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default App;
