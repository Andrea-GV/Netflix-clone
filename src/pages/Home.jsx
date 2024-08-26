import '../styles/Home.scss'
// import LenguageSelect from "../components/LenguageSelect"
import Row from '../components/Row.jsx';
import requests from '../requests.jsx';
import Banner from '../components/Banner.jsx';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

function Home() {

  return (
       <div className='App'>
      <Nav/>
      <Banner/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Today" fetchUrl={requests.fetchTrendingDay} />
      <Row
        title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      
      {/* TRYING NEW THINGS */}
       <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  )
}

export default Home
