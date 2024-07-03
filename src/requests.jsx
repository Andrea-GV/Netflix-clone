// request.js no es un componente, es un archivo que le daremos funcionalidad para hacer las peticiones
const API_KEY = "011b488c08dce799b8335227bc5f6364";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    // DESDE AQUÍ LA WEB API
    fetchCollection: `/search/collection?api_key=${API_KEY}`,
    fetchCompany: `/search/company?api_key=${API_KEY}`,
    fetchKeyword: `/search/keyword?api_key=${API_KEY}`,
    fetchMovie: `/search/movie?api_key=${API_KEY}`,
    fetchMulti: `/search/multi?api_key=${API_KEY}`,
    fetchPerson: `/search/person?api_key=${API_KEY}`,
    fetchTV: `/search/tv?api_key=${API_KEY}`,
    fetchTrendingDay: `/trending/all/day?api_key=${API_KEY}&language=en-US`
}

export default requests;