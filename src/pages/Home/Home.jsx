import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/movies-api';
import { TrandingMoviesList } from 'components/TrandingMoviesList/TrandingMoviesList';

const Home = () => {
  const [isListShow, setIsListShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (!isListShow) {
      setIsLoader(true);
      fetchMovies()
        .then(({ data: { results } }) => {
          setMovies([...results]);
          setIsListShow(true);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setIsLoader(false);
        });
    }
  }, [isListShow]);

  return (
    <>
      {!isLoader && isListShow && (
        <>
          <h2>Trending today</h2>
          <TrandingMoviesList movies={movies} />
        </>
      )}
    </>
  );
};

export default Home;
