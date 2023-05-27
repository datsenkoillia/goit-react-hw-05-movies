import { Link, useLocation } from 'react-router-dom';

export function TrandingMoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SearchMoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
