import ReviewForm from '../offers-review-form/review-form';
import { TReview } from '../../types/review';
import { RATING_COEF } from '../../const';

type OfferReviewProps = {
  reviews: TReview[];
};

export default function OfferReview({
  reviews,
}: OfferReviewProps): JSX.Element {
  const formatDate = (date: string, locales = 'en-US'): string =>
    new Date(date).toLocaleString(locales, { month: 'long', year: 'numeric' });

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews?.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviews &&
          reviews.map((review) => (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={review.user.avatarUrl}
                    width="54"
                    height="54"
                    alt={review.user.name}
                  />
                </div>
                <span className="reviews__user-name">{review.user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span
                      style={{
                        width: `${Math.round(review.rating) * RATING_COEF}%`,
                      }}
                    >
                    </span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{review.comment}</p>
                <time className="reviews__time" dateTime={review.date}>
                  {formatDate(review.date)}
                </time>
              </div>
            </li>
          ))}
      </ul>

      <ReviewForm />
    </section>
  );
}
