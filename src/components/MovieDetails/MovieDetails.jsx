import { useEffect, useState } from 'react';
import { Link, Route, useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.scss';

import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const API_KEY = 'f0069e3151b7ea61afff007960cd59b5';
const URL = 'https://api.themoviedb.org/3';

  
  

export const MovieDetails = () => {

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { movieId, info } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const loadMovie = async () => {
    const response = await fetch(`${URL}/movie/${movieId}?api_key=${API_KEY}`);

    const data = await response.json();
    setMovie(data);
  };

  const loadCast = async () => {
    const response = await fetch(
      `${URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );

    const data = await response.json();
    console.log(data.cast, 'i am cast');
    setCast(data.cast);
  };

  const loadReviews = async () => {
    const response = await fetch(
      `${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );

    const data = await response.json();
    console.log(data.results, 'i am reviews');
    setReviews(data.results);
  };

  useEffect(() => {
    loadMovie();
  }, []);

  useEffect(() => {
    if (info === 'cast') {
      loadCast();
    }

    if (info === 'reviews') {
      loadReviews();
    }
  }, [info]);

  return (
    <>
      <button onClick={goBack} className="btn-bact">
        Go back
      </button>

      <div className="movie-details">
        <div className="movie-details-image">
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
        <div className="movie-details-info">
          <h1>{movie.title}</h1>
          <p>
            {' '}
            <span style={{ fontWeight: 'bold' }}>Score:</span>{' '}
            {movie.vote_average}
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>genres</h3>
          <ul>
            {movie.genres ? (
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)
            ) : (
              <li>No genres available</li>
            )}
          </ul>
          <p>
            {' '}
            <span style={{ fontWeight: 'bold' }}>Release Date:</span>{' '}
            {movie.release_date}
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movie/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movie/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <div />
        <hr />
        {info === 'cast' && <Cast cast={cast} />}
        {info === 'reviews' && <Reviews reviews={reviews} />}
      </div>
    </>
  );
};

