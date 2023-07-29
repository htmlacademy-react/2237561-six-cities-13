import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offer';
import { AppRoute, RATING_COEF } from '../../const';
import BookmarksButton from '../../components/bookmark/favorite-bookmark';

type TCitiesCardProps = {
  offer: TOffer;
  onCardHover: (activeCard: string | null) => void;
}

function CitiesCard({offer, onCardHover}: TCitiesCardProps): JSX.Element {

  return (
    <article className="cities__card place-card"
      onMouseOver={() => onCardHover(offer.id)}
      onMouseOut={() => onCardHover(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
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
export default CitiesCard;
