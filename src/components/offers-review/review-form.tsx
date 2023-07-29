import { Fragment, ChangeEvent, useState } from 'react';
import { GRADES, MIN_COMMENTS_LENGTH, MAX_COMMENTS_LENGTH } from '../../const';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const isValid =
    review.length >= MIN_COMMENTS_LENGTH &&
    review.length <= MAX_COMMENTS_LENGTH &&
    rating !== '';

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {GRADES.map((grade, index) => {
          const gradeValue: number = GRADES.length - index;

          return (
            <Fragment key={grade}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={gradeValue}
                id={`${gradeValue}-stars`}
                type="radio"
                checked={Number(rating) === gradeValue}
                onChange={handleInputChange}
              />
              <label
                className="reviews__rating-label form__rating-label"
                htmlFor={`${gradeValue}-stars`}
                title={grade}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleTextareaChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {MIN_COMMENTS_LENGTH} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ReviewForm;
