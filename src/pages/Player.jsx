import '../styles/pages/Player.scss'
import back_arrow_icon from '../assets/back_arrow_icon.png'
// Para traer el trailer de la api de youtube usar movie-trailer y el import de youtube.
import axios from "../axios.jsx";
import movieTrailer from "movie-trailer";
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useState, useEffect } from 'react'; 
import requests from '../requests.jsx';

function Player({}) { //  fetchUrl 
    const {id} = useParams();
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movie, setMovie] = useState({});

    const opts = {
        width:"100%",
        height: "500",
        playerVars: {
            autoplay: 1,
        },
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchMovie(id));
                // verify the movie fetching
                console.log("Movie fetched", request);
                setMovie(request.data);
            } catch (error) {
                console.error("Error fetching movie:", error)
            }
        }
        fetchData();
    }, [id]); 

    useEffect(() => {
        async function fetchTrailer() {
            console.log("Movie-trailer fetched", movie); 
            if (movie.title || movie.original_name) {
                try {       
                    const trailer = await movieTrailer(movie.title || movie.original_name);
                    // verify the trailer
                    console.log("Trailer URL:", trailer);
                    const urlParams = new URLSearchParams(new URL(trailer).search);
                    // Verify the url
                    console.log("Video ID:", urlParams);
                    setTrailerUrl(urlParams.get("v"));
            } catch (error) {

                console.error("Error fetching trailer:", error);
            }
        }
        }
    fetchTrailer();
  }, [movie]);

    return (
    <div className='player'>
        <img src={back_arrow_icon} alt={back_arrow_icon} />

        <div className="player-info">
            <p>Published Date</p>
            <p>Name</p>
            <p>Type</p>
            <p>Cast: </p>
                <h1>{movie.title || movie.original_name}</h1>
                {/* <YouTube videoId="" opts={opts} /> */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
</div>
  )
}

export default Player
