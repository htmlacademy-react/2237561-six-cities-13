import { Fragment, FormEvent, ChangeEventHandler, useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { postReviewAction } from '../../store/api-actions';
import {
  GRADES,
  ReviewLength,
  DEFAULT_RATING,
  Status
} from '../../const';
import { getReviewStatus } from '../../store/offer-data/selectors';
import { setReviewStatus } from '../../store/offer-data/offer-data';

type TReviewFormProps = {
  offerId: string;
};

function ReviewForm({ offerId }: TReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const postReviewStatus = useAppSelector(getReviewStatus);

  const isValid =
    rating !== DEFAULT_RATING &&
    review.length >= ReviewLength.Min &&
    review.length <= ReviewLength.Max;

  useEffect(() => {
    if (postReviewStatus === Status.Success && formRef) {
      dispatch(setReviewStatus(Status.Idle));
      setRating(0);
      setReview('');
    }
  }, [dispatch, postReviewStatus]);


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
    if (isValid) {
      dispatch(
        postReviewAction({
          offerId: offerId,
          comment: review,
          rating: rating,
        })
      );
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
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
                disabled={postReviewStatus === Status.Loading}
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
        disabled={postReviewStatus === Status.Loading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {ReviewLength.Min} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || postReviewStatus === Status.Loading}
        >
          {postReviewStatus === Status.Loading ? 'In process...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
