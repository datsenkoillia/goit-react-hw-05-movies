import React, { Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from 'servises/movies-api';
import {
  AddInfWrapper,
  GoBackButton,
  MovieItemWrapper,
} from './MovieItem.styled';

const MovieItem = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

  const [isMovieShow, setIsMovieShow] = useState(false);
  const [movie, setMovie] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    fetchMovieDetails(movieId)
      .then(({ data }) => {
        setMovie(data);
        setIsMovieShow(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      {!isLoader && isMovieShow && (
        <>
          <Link to={backLinkRef.current}>
            <GoBackButton type="button">&#8592; Go back </GoBackButton>
          </Link>

          <MovieItemWrapper>
            <div>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                />
              ) : (
                <img
                  src={`https://upload.wikimedia.org/wikipedia/en/d/d6/Image_coming_soon.png`}
                  alt={title}
                  width="300px"
                  height="480px"
                />
              )}
            </div>
            <div>
              <h1>
                {title} <span>({release_date.slice(0, 4)})</span>
              </h1>
              <p>User Score: {Math.floor(vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              {genres.length > 0 ? (
                <p>{genres.map(genre => genre.name).join(', ')}</p>
              ) : (
                <p>Other</p>
              )}
            </div>
          </MovieItemWrapper>

          <AddInfWrapper>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </AddInfWrapper>
          <Suspense fallback={<div>...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieItem;
