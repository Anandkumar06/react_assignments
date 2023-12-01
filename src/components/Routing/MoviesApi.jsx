import React, { useState } from 'react';
import  '../css/Output.css'

function MoviesApi() {
  const [inputData, setinputData] = useState('');
  const [movies, setmovies] = useState([]);
  const [loader, Setloader] = useState(false);

  const input = ({ target: { value } }) => {
    setinputData(value);
  };

  async function fn() {
    const movieDetails = await fetch(
      `https://www.omdbapi.com/?s=${inputData}&apikey=3c92773c`
    );

    Setloader(true);
    try {
      const movieDetail = await movieDetails.json();
      const { Search } = movieDetail;

      // Update the movies state before calling the map function
      setmovies(ps => {
        return Search;
      });

      Setloader(false);
    } catch (error) {
      console.log(error);
    }

    return Promise.resolve();
  }

  return (
    <div className="movieDiv">
      {loader && <span className="loader"></span>}
      <input
        type="text"
        placeholder="Enter Movie"
        onChange={input}
      />
      <button onClick={fn}>Search</button>
      <div className="maindiv">
        {movies.map(({ Title, Poster }) => {
          console.log(Title);
          return (
            <div className="output" key={Title}>
              <h1>{Title}</h1>
              {Poster === "N/A" ? (
                <img
                  src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
                  height="250px" alt='movieposter'
                />
              ) : (
                <img src={Poster} height="250px" alt='movieposter' />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesApi;
