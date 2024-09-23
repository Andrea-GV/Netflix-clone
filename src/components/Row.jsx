import { useState, useEffect } from "react";
import axios from "../axios.jsx";
import "../styles/components/Row.scss"
import requests from "../requests.jsx";
// import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import urlParse from 'url-parse'
import { useNavigate } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, isLargeRow }) { // fetchUrl, 

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
       async function fetchData() {
           const request = await axios.get(requests.fetchMovies);
           // console.log(request.data.results)
           setMovies(request.data.results);
           return request;
        } 
        fetchData();
    }, []) // fetchUrl

    // Configuración de visualización de trailer
    // const opts = {
    //     height: "300px",
    //     width: "50%",
    //     playerVars: {
    //         autoplay: 1,
    //     },
    // };

    // Para hacer click sobre la película, en caso de que no quiera hacer click, sólo al pasar el ratón por encima usar MouseOver-MouseOut 

    const handleOnClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // originalmente tenía esto: 
            // movieTrailer(movie?.name || "")
            //  .then((url) => {
            //     const urlParams = new URLSearchParams(new URL(url).search);
            //     setTrailerUrl(urlParams.get("v"));
            // })
            // .catch((error) => console.log(error))
            const movieTitle = movie?.title | movie?.original_name || movie?.original_title || movie?.name || "";
            movieTrailer(movieTitle)
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
                  // Div para contener imagen y título de cada película
                <div key={movie.id} className="poster-container">
                <img
                    // key={movie.id}
                    // onMouseOver={() => handleMouseOver(movie)}
                    // onMouseOut={handleMouseOut}
                          // FUNCIÓN CLICK PARA REPRODUCIR EL TRAILER EN LA HOME onClick={() => handleOnClick(movie)}
                          //Función click para redirigir a página de Player
                    onClick={() => {
                        navigate(`/player/${movie.id}`); 
                    }}
                    className={`poster ${isLargeRow && "posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    <div className="poster-title">
                        <p>{movie.title || movie.original_name}</p>
                    </div>
                </div>
            ))}
        </div>
        {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  )
}

export default Row
