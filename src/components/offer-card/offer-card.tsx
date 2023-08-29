import React from 'react';
import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offer';
import { AppRoute, RATING_COEF } from '../../const';
import FavoriteBookmarkButton from '../favorite-bookmark/favorite-bookmark';
import { selectOffer } from '../../store/offers-data/offers-data';
import { useAppDispatch } from '../../hooks/index';

type TCardClass = {
  name: string;
  width: number;
  height: number;
};

type TOfferCardProps = {
  offer: TOffer;
  cardClass: TCardClass;
};

function OfferCard({ offer, cardClass }: TOfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    price,
    previewImage,
    title,
    isPremium,
    rating,
    type,
    id,
    isFavorite,
  } = offer;
  const { name, width, height } = cardClass;

  return (
    <article
      className={`${name}__card place-card`}
      onMouseEnter={() => dispatch(selectOffer(offer.id))}
      onMouseOut={() => dispatch(selectOffer(null))}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${name}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteBookmarkButton
            offerId={id}
            isFavorite={isFavorite}
            isBigSize={false}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * RATING_COEF}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
const MemoOfferCard = React.memo(OfferCard);
export default MemoOfferCard;
