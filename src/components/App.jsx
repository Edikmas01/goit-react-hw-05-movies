import { useEffect, useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';

const movieId = '157336';
export const App = () => {
  const API_KEY = 'f0069e3151b7ea61afff007960cd59b5';
  const URL = 'https://api.themoviedb.org/3';

  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const response = await fetch(
      `${URL}/trending/movie/day?api_key=${API_KEY}`
    );

    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  console.log('re-render', movies);
  return (
    <>
      <h1 className="trending__title">Trending movies</h1>

      {movies.length > 0 ? (
        <div className="movies__list">
          {movies.map(m => {
            return (
              <Link to={`/movie/${m.id}`} className="movie__item" key={m.id}>
                <div className="movie__img">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${m.backdrop_path}`}
                    alt={m.title}
                  />
                </div>
                <h3 className="movie__title">{m.title}</h3>
                <p className="movie__release-date">{m.release_date}</p>
                <p className="movie__overview">{m.overview}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2>No movies found</h2>
      )}
    </>
  );
};
