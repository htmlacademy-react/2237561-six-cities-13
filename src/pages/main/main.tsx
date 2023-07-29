import {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offer';
import OffersListSort from '../../components/sort/offers-list-sort';
import Header from '../../components/header/header';
import CitiesTabsSort from '../../components/sort/cities-tabs-sort';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';

type MainScreenProps = {
  offersCount: number;
  offers: TOffer[];
};

function MainScreen({ offersCount, offers }: MainScreenProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const onCardHover = (id: string | null) => {
    setActiveCardId(id);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesTabsSort/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in Amsterdam
              </b>
              <OffersListSort/>
              <ListOffers
                offers={offers}
                onCardHover={onCardHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                location={offers[0].city.location}
                offers={offers}
                selectedOffer={activeCardId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
