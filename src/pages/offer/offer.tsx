import { useEffect } from 'react';
import {Helmet} from 'react-helmet-async';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewList from '../../components/offer-review-list/offer-review-list';
import ReviewForm from '../../components/offer-review-form/offer-review-form';
import BookmarksButton from '../../components/bookmark/favorite-bookmark';
import OfferCardList from '../../components/offers-card-list/offers-card-list';
import Spinner from '../../components/spinner/spinner';
import { RATING_COEF, AuthorizationStatus } from '../../const';
import Map from '../../components/map/map';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import { fetchOfferAction, fetchNearPlacesAction, fetchReviewsAction } from '../../store/api-actions';
import {nearByCities} from '../../utils/nearby';


function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useParams().id;
  const offer = useAppSelector((store) => store.offer);
  const nearPlaces = useAppSelector((store) => store.nearPlaces);

  const isOfferLoaded = useAppSelector((store) => store.isOfferDataLoading);
  const isReviewsLoaded = useAppSelector((store) => store.isReviewsDataLoading);
  const isNearByLoaded = useAppSelector((store) => store.isNearPlacesDataLoading);
  const isAuthorizationStatus = useAppSelector((store) => store.authorizationStatus);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  useEffect(() => {
    let isOfferPageMounted = true;
    if (offerId && isOfferPageMounted) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      dispatch(fetchNearPlacesAction(offerId));
    }

    return () => {
      isOfferPageMounted = false;
    };
  }, [dispatch, offerId]);

  const onCardHover = () => {
    setActiveCardId(offer.id);
  };

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities - ${offer.title}`}</title>
      </Helmet>
      <Header />
      {isOfferLoaded || isReviewsLoaded || isNearByLoaded
        ?
        <Spinner />
        :
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer &&
                offer.images.map((item) => (
                  <div
                    className="offer__image-wrapper"
                    key={crypto.randomUUID()}
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
                {offer && offer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">{offer && offer.title}</h1>
                  <BookmarksButton
                    isActive={false}
                    size="big"
                    page="offer"
                  />
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${Math.round(offer.rating) * RATING_COEF}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer && offer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer && offer.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                  Max {offer && offer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{offer && offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer &&
                    offer.goods.map((item) => (
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
                        offer && offer.host.isPro ? '--pro' : ''
                      } user__avatar-wrapper`}
                    >
                      <img
                        className="offer__avatar user__avatar"
                        src={offer && offer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">
                      {offer && offer.host.name}
                    </span>
                    <span className="offer__user-status">
                      {offer && offer.host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {offer && offer.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <ReviewList/>
                  {isAuthorizationStatus === AuthorizationStatus.Auth &&
                <ReviewForm
                  offerId= {offerId as string}
                />}
                </section>
              </div>
            </div>
            <Map
              location={nearByCities(nearPlaces)[0].city.location}
              offers={nearByCities(nearPlaces)}
              selectedOffer={activeCardId}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
              Other places in the neighbourhood
              </h2>
              <OfferCardList
                offers={nearByCities(nearPlaces)}
                onCardHover={onCardHover}
                isMainOfferList = {false}
                activeSorting = {'TopRated'}
              />
            </section>
          </div>
        </main>}
    </div>
  );
}

export default OfferPage;
