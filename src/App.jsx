import './App.css'
import Row from './Row.jsx'
import requests from './requests.jsx';
function App() {


  return (
    <>
      <h1>Hey there!</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </>
  )
}

export default App;
