import { Fragment, FormEvent, ChangeEventHandler, useState } from 'react';
import { useAppDispatch } from '../../hooks/index';
import { postReview } from '../../store/api-actions';
import { GRADES, MIN_COMMENTS_LENGTH, MAX_COMMENTS_LENGTH, DEFAULT_RATING } from '../../const';

type ReviewFormProps = {
  offerId: string;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const isValid = rating !== DEFAULT_RATING &&
    review.length >= MIN_COMMENTS_LENGTH &&
    review.length <= MAX_COMMENTS_LENGTH;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }): void => {
    setRating(Number(target.value));
  };

  const handleTexAreaChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }): void => {
    setReview(target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview({
      offerId: offerId,
      comment: review,
      rating: rating,
    }));

    setRating(0);
    setReview('');
  };


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
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
        onChange={handleTexAreaChange}
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
