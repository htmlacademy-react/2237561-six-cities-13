import { Fragment,FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { dropSendingStatus } from '../../store/actions';
import { postReview } from '../../store/api-actions';
import { GRADES, MIN_COMMENTS_LENGTH, MAX_COMMENTS_LENGTH, RequestStatus } from '../../const';
import { TOffer } from '../../types/offer';

type ReviewFormProps = {
  offerId: TOffer['id'];
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector((state) => state.sendReviewStatus);

  const isValid =
    review.length >= MIN_COMMENTS_LENGTH &&
    review.length <= MAX_COMMENTS_LENGTH &&
    rating !== '';

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleRatingtChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postReview({reviewData: {comment: review, rating: Number(rating)}, offerId}));
  };

  useEffect(() => {
    switch (sendingStatus) {
      case RequestStatus.Success:
        setReview('');
        setRating('');
        dispatch(dropSendingStatus());
        break;
      case RequestStatus.Pending:
        setIsSubmitting(true);
        break;
      default:
        setIsSubmitting(false);
    }
  }, [sendingStatus, dispatch]);

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
                onChange={handleRatingtChange}
                disabled={isSubmitting}
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
        disabled={isSubmitting}
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
          disabled={!isValid || isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default ReviewForm;
