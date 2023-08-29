import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index';
import MainEmpty from '../../components/main-empty/main-empty';
import MemoOffersListSort from '../../components/offer-list-sort/offers-list-sort';
import Header from '../../components/header/header';
import MemoCitiesTabs from '../../components/cities-tabs/cities-tabs';
import MemoOfferCardList from '../../components/offers-card-list/offers-card-list';
import Spinner from '../../components/spinner/spinner';
import Map from '../../components/map/map';
import { getCity, getOffersDataLoading, getOffersData, getSelectedOfferId } from '../../store/offers-data/selectors';


function MainScreen(): JSX.Element {
  const city = useAppSelector(getCity);
  const selectedOfferId = useAppSelector(getSelectedOfferId);
  const isOffersDataLoading = useAppSelector(getOffersDataLoading);
  const offers = useAppSelector(getOffersData);

  if (isOffersDataLoading) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MemoCitiesTabs />
        </div>
        <div className="cities">
          {!offers.length ? <MainEmpty /> : (

            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in {city}
                </b>
                <MemoOffersListSort/>
                <MemoOfferCardList offers={offers}/>
              </section>
              <div className="cities__right-section">
                <Map
                  offers = {offers}
                  city={offers[0].city}
                  selectedOffer={selectedOfferId}
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
