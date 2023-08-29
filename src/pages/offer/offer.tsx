import { useEffect } from 'react';
import {Helmet} from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import OfferReviewCard from '../../components/offer-review-card/offer-review-card';
import ReviewForm from '../../components/offer-review-form/offer-review-form';
import FavoriteBookmarkButton from '../../components/favorite-bookmark/favorite-bookmark';
import OfferCard from '../../components/offer-card/offer-card';
import Spinner from '../../components/spinner/spinner';
import { RATING_COEF, AuthorizationStatus, CardClass, MAX_NEAR_PLACES_COUNT } from '../../const';
import Map from '../../components/map/map';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchOfferAction, fetchNearPlacesAction, fetchReviewsAction } from '../../store/api-actions';
import { dropOffer } from '../../store/offer-data/offer-data';
import { getOfferDataLoading, getNearOffers, getOffer, getReviews } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import NotFoundScreen from '../not-found/not-found';


function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const offerId = String(id);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentOffer = useAppSelector(getOffer);
  const isFullOfferDataLoading = useAppSelector(getOfferDataLoading);
  const nearPlaces = useAppSelector(getNearOffers);

  const reviews = useAppSelector(getReviews);

  const neighborPlaces = nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchNearPlacesAction(offerId));
      dispatch(fetchReviewsAction(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };

  }, [offerId, dispatch]);


  if (isFullOfferDataLoading) {
    return <Spinner />;
  }
  if (!currentOffer) {
    return <NotFoundScreen />;
  }
  const {isPremium, title, rating, type, bedrooms, maxAdults, price, host, description, goods} = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities - ${title}`}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer &&
                currentOffer.images.map((item) => (
                  <div
                    className="offer__image-wrapper"
                    key={item}
                  >
                    <img
                      className="offer__image"
                      src={item}
                      alt="Photo studio"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              { isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <FavoriteBookmarkButton
                  offerId={currentOffer.id}
                  isFavorite={currentOffer.isFavorite}
                  isBigSize
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(rating) * RATING_COEF}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedroom{bedrooms > 1 ? 's' : ''}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adult{maxAdults > 1 ? 's' : ''}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (
                    <li
                      className="offer__inside-item"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper offer__avatar-wrapper${
                      host.isPro ? '--pro' : ''
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <OfferReviewCard reviews={reviews}/>
                {authorizationStatus === AuthorizationStatus.Auth &&
                <ReviewForm
                  offerId= {offerId}
                />}
              </section>
            </div>
          </div>
          <Map
            city={currentOffer.city}
            offers={neighborPlaces.concat(currentOffer)}
            selectedOffer={currentOffer.id}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {neighborPlaces && neighborPlaces.map((item) => (
                <OfferCard
                  key={item.id}
                  offer={item}
                  cardClass={CardClass.CITY}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
