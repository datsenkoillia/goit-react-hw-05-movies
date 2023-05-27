import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servises/movies-api';

const Reviews = () => {
  const { movieId } = useParams();

  const [isReviewsShow, setIsReviewsShow] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    fetchMovieReviews(movieId)
      .then(({ data }) => {
        setReviews(data.results);
        setIsReviewsShow(true);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoader(false);
      });
  }, [movieId]);

  return (
    <>
      {!isLoader && isReviewsShow && (
        <>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map(({ author, content, id }) => (
                <li key={id}>
                  <p>
                    <b>Author: {author}</b> <br />
                    <span>{content}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
