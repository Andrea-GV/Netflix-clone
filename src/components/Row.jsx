import { useState, useEffect } from "react";
import axios from "../axios.jsx";
import "../styles/components/Row.scss"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import urlParse from 'url-parse'

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
       async function fetchData() {
           const request = await axios.get(fetchUrl);
           // console.log(request.data.results)
           setMovies(request.data.results);
           return request;
        } 
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "300px",
        width: "50%",
        playerVars: {
            autoplay: 1,
        },
    };

    // Para hacer click sobre la película, en caso de que no quiera hacer click, sólo al pasar el ratón por encima usar MouseOver-MouseOut 

    const handleOnClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // originalmente tenía esto: 
            movieTrailer(movie?.name || "")
             .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            // .catch((error) => console.log(error))
            const movieTtitle = movie?.title | movie?.original_name || movie?.original_title || movie?.name || "";
            movieTrailer(movieTtitle)
            .then((url) => {
                const parsedUrl = urlParse(url, true);
                const videoId = parsedUrl.query.v;
                setTrailerUrl(videoId);
            })
            .catch((error) => console.log(error))
        }
        }

    // Para que empiece el trailer al pasar por encima el ratón

    // const handleMouseOver = async (movie) => {
    //     if (trailerUrl) {
    //     setTrailerUrl('');
    //     } else {
    //     const movieTitle = movie?.title || movie?.original_name || movie?.original_title || movie?.name || "";
    //     const url = await movieTrailer(movieTitle);
    //     const parsedUrl = urlParse(url, true);
    //     const videoId = parsedUrl.query.v;
    //     setTrailerUrl(videoId);
    //     }
    // };

    // const handleMouseOut = () => {
    // setTrailerUrl('');
    // };
    
  return (
    <div className="row">
        <h2>{title}</h2>
          
        <div className="posters">
            {movies.map(movie => (
                <img
                    key={movie.id}
                    // onMouseOver={() => handleMouseOver(movie)}
                    // onMouseOut={handleMouseOut}
                    onClick={() => handleOnClick(movie)}
                    className={`poster ${isLargeRow && "posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
