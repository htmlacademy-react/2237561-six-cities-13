import {Helmet} from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import OfferReview from '../../components/offers-review/review';
import BookmarksButton from '../../components/bookmark/favorite-bookmark';
import ListOffers from '../../components/cities-offers-list/cities-offers-list';
import { TFullOffer, TOffer } from '../../types/offer';
import { TReview } from '../../types/review';
import { AppRoute, RATING_COEF } from '../../const';
import Map from '../../components/map/map';

type TOfferPageProps = {
  fullOffers: TFullOffer[];
  reviews: TReview[];
  nearOffers: TOffer[];
};

function OfferPage({fullOffers, reviews, nearOffers}: TOfferPageProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const {id } = useParams();
  const selectedOffer = fullOffers.find((offer) => offer.id === id);

  if (!selectedOffer) {
    return <Navigate to={AppRoute.NotFound}/>;
  }

  const onCardHover = () => {
    setActiveCardId(selectedOffer.id);
  };

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities - ${selectedOffer.title}`}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {selectedOffer &&
                selectedOffer.images.map((item) => (
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
              {selectedOffer && selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{selectedOffer && selectedOffer.title}</h1>
                <BookmarksButton
                  isActive={false}
                  size="big"
                  page="offer"
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.round(selectedOffer.rating) * RATING_COEF}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {selectedOffer && selectedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {selectedOffer && selectedOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer && selectedOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedOffer && selectedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {selectedOffer &&
                    selectedOffer.goods.map((item) => (
                      <li
                        className="offer__inside-item"
                        key={crypto.randomUUID()}
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
                      selectedOffer && selectedOffer.host.isPro ? '--pro' : ''
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={selectedOffer && selectedOffer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {selectedOffer && selectedOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {selectedOffer && selectedOffer.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {selectedOffer && selectedOffer.description}
                  </p>
                </div>
              </div>
              <OfferReview reviews={reviews}/>
            </div>
          </div>
          <Map
            location={nearOffers[0].city.location}
            offers={nearOffers}
            selectedOffer={activeCardId}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <ListOffers
              offers={nearOffers}
              onCardHover={onCardHover}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
