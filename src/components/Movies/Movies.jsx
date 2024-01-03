import { MovieSearch } from 'components/MovieSearch';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const API_KEY = 'f0069e3151b7ea61afff007960cd59b5';
const URL = 'https://api.themoviedb.org/3';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);

  const handleSearchSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${URL}/search/movie?query=${query}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);

      if (query) {
        setSearchParams({ query });
      } else {
        setSearchParams({});
      }
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  return (
    <>
      <h1>Search you movie</h1>
      <MovieSearch
        query={query}
        onChange={setQuery}
        onSubmit={handleSearchSubmit}
      />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
