import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'servises/movies-api';

const Cast = () => {
  const { movieId } = useParams();

  const [isCastShow, setIsCastShow] = useState(false);
  const [cast, setCast] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    fetchMovieCredits(movieId)
      .then(({ data }) => {
        setCast(data.cast);
        setIsCastShow(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieId]);

  return (
    <>
      {!isLoader && isCastShow && (
        <>
          {cast.length > 0 ? (
            <ul>
              {cast.map(({ original_name, character, id, profile_path }) => (
                <li key={id}>
                  <p>{original_name} </p>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <p>No Photo</p>
                  )}
                  <p>Character: {character} </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any casts for this movie</p>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
