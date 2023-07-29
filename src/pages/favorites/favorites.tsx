import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offer';
import Header from '../../components/header/header';
import FavoriteCard from '../../components/favorite-card/favorite-card';

type TFavoritesPageProps = {
  offers: TOffer[];
};

type OffersByLocationsGroup = {
  [city: string]: TOffer[];
};

const getOffersByLocationGroup = (offers: TOffer[]) =>
  offers.reduce((cityGroup: OffersByLocationsGroup, offer) => {
    const city = offer.city.name;

    if (!cityGroup[city]) {
      cityGroup[city] = [];
    }
    cityGroup[city].push(offer);

    return cityGroup;
  }, {});

export function FavoritesPage({ offers }: TFavoritesPageProps): JSX.Element {
  const offersByLocation = getOffersByLocationGroup(offers);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities - Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offersByLocation).map(([city]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.map((offer) => (
                      <FavoriteCard key={offer.id} offer={offer} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
