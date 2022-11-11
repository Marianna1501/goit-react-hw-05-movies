import { useState, useEffect } from 'react';
import { getSearchMovie } from 'services/API';
import { SearchBar } from 'components/SearchBar/Searchbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function SearchMovieList() {
  const [movies, setMovies] = useState(null);
  const [params, setParams] = useSearchParams();

  const param = params.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!param) {
      return;
    }
    getSearchMovie(param).then(result => {
      if (result.results.length === 0) {
        alert('no such movie');
      }
      setMovies(result.results);
    });
  }, [param]);

  const onSubmit = query => {
    setParams({ query });
  };
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
