import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../store/index';
import MainEmpty from '../../components/main-empty/main-empty';
import OffersListSort from '../../components/offer-list-sort/offers-list-sort';
import Header from '../../components/header/header';
import CitiesTabsSort from '../../components/cities-tabs/cities-tabs';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import { fetchOffers } from '../../store/actions';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((store) => store.offers);
  const activeCity = useAppSelector((store) => store.activeCity);
  const cityOffers = offers.filter((offer) => offer.city.name === activeCity.name);

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const onCardHover = (id: string | null) => {
    setActiveCardId(id);
  };

  useEffect(() => {
    dispatch(fetchOffers(activeCity.name));
  }, [dispatch, activeCity.name]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main</title>
      </Helmet>
      <Header />
      <main
        className={cn('page__main', 'page__main--index', {
          'page__main--index-empty': !cityOffers.length,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesTabsSort />
        </div>
        <div className="cities">
          {!cityOffers.length && <MainEmpty />}
          {!!cityOffers.length && (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {cityOffers.length} places to stay in {activeCity.name}
                </b>
                <OffersListSort />
                <ListOffers
                  offers={cityOffers}
                  onCardHover={onCardHover}
                  isMainOfferList
                />
              </section>
              <div className="cities__right-section">
                <Map
                  location={cityOffers[0].city.location}
                  offers={cityOffers}
                  selectedOffer={activeCardId}
                  isMainMap
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
