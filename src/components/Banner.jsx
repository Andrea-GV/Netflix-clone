import { useEffect, useState } from "react";
import axios from "../axios.jsx";
import requests from "../requests.jsx";
import "../styles/components/Banner.scss"   ;
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
      <header className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"            
          }}
      >
        <div className="contents">
            <h1 className="title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>  
            
            <h1 className="description">
                {truncate(movie?.overview, 150)}
            </h1>
              
            <div className="btns">
                  <button className="btn"><img src={play_icon} alt="play icon" /> Play</button>
                <button className="btn dark-btn"><img src={info_icon} alt="info icon" /> More Info</button>
            </div>
        </div>
        <div className="fadeBottom"/>
    </header>
  )
}

export default Banner
