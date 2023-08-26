import { Link } from 'react-router-dom';
import cn from 'classnames';
import { TOffer } from '../../types/offer';
import { AppRoute, RATING_COEF } from '../../const';
import BookmarksButton from '../bookmark/favorite-bookmark';

type TOfferCardProps = {
  offer: TOffer;
  onCardHover: (activeCard: string | null) => void;
  isMainOfferList?: boolean;
}

function OfferCard({offer, onCardHover, isMainOfferList}: TOfferCardProps): JSX.Element {

  return (
    <article
      className={cn(
        'place-card',
        {'cities__card': isMainOfferList},
        {'near-places__card': !isMainOfferList}
      )}
      onMouseOver={() => onCardHover(offer.id)}
      onMouseOut={() => onCardHover(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={cn(
          'place-card__image-wrapper',
          {'cities__image-wrapper': isMainOfferList},
          {'near-places__image-wrapper': !isMainOfferList}
        )}
      >
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title} />

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarksButton
            isActive={offer.isFavorite ? '__bookmark-button--active' : false}
            size="small"
            page="place-card"
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * RATING_COEF}%` }}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`${AppRoute.Offer}${offer.id}`}>
          <h2 className="place-card__name">{offer.title}</h2>
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default OfferCard;
