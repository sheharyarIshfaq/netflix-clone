import { useState } from "react";
import requests from "./api/requests";
import "./App.css";
import MoviesRow from "./components/MoviesRow";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import MainSpinner from "./components/spinners/MainSpinner";

function App() {
  const [loadingApp, setLoadingApp] = useState(true);
  setTimeout(() => {
    setLoadingApp(false);
  }, 3000);
  return (
    <>
      {loadingApp && (
        <div className="loading_container">
          <MainSpinner />
        </div>
      )}
      {!loadingApp && (
        <div className="app">
          <Navbar />
          <Banner />
          <MoviesRow
            title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
            isLarge={true}
          />
          <MoviesRow title="Trending Now" fetchUrl={requests.fetchTrending} />
          <MoviesRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <MoviesRow
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
          />
          <MoviesRow
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
          />
          <MoviesRow
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
          />
          <MoviesRow
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
          />
          <MoviesRow
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
          />
        </div>
      )}
    </>
  );
}

export default App;
