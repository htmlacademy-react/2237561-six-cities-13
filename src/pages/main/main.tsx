import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offer';
import OffersListSort from '../../components/sort/offers-list-sort';
import Header from '../../components/header/header';
import CitiesTabsSort from '../../components/sort/cities-tabs-sort';
import ListOffers from '../../components/list-offers/list-offers';

type MainScreenProps = {
  offersCount: number;
  offers: TOffer[];
};

function MainScreen({ offersCount, offers }: MainScreenProps): JSX.Element {
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
              <ListOffers offers={offers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
