import { Link } from 'react-router-dom';
import MemoOfferCard from '../../components/offer-card/offer-card';
import { AppRoute, CardClass } from '../../const';
import { TOffer } from '../../types/offer';

type TFavoritesListProps = {
  favorites: TOffer[];
};

export const FavoritesList = ({ favorites }: TFavoritesListProps) => {
  const favoriteCities = favorites.reduce<string[]>((acc, item) => {
    const cityName = item.city.name;
    if (!acc.includes(cityName)) {
      acc.push(cityName);
    }
    return acc;
  }, []);

  return (
    <ul className="favorites__list">
      {favoriteCities.map((cityName, i) => (
        <li className="favorites__locations-items" key={favorites[i].id}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{cityName}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {favorites
              .filter((item) => item.city.name === cityName)
              .map((item) => (
                <MemoOfferCard
                  key={item.id}
                  offer={item}
                  cardClass={CardClass.FAVORITES}
                />
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
