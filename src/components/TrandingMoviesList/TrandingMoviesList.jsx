import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

TrandingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired),
};
