import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Movie.scss'

const API_KEY = 'f0069e3151b7ea61afff007960cd59b5';
const URL = 'https://api.themoviedb.org/3';

  
  

export const Movie = () => {
  const { movieId } = useParams();
  const navigete = useNavigate();
  const goBack = () => navigete(-1);

    const [movie, setMovie] = useState({});

    const loadMovie = async () => {
        const response = await fetch(
            `${URL}/movie/${movieId}?api_key=${API_KEY}`
        );

        const data = await response.json();
        setMovie(data);
        console.log(' I am movie', data);
    }

    useEffect(() => {
        loadMovie();
    }, [])


  return (
    <>
      <button onClick={goBack}className='btn-bact'>Go bact</button>

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
          <hr /> {/* Горизонтальная линия */}
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="Reviews">Reviews</Link>
              </li>
            </ul>
            <div />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

