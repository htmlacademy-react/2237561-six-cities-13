import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { CityName } from '../../types/offer';
import { getCity } from '../../store/offers-data/selectors';
import { selectCityAction } from '../../store/offers-data/offers-data';
import { useAppDispatch, useAppSelector } from '../../hooks';

function CitiesTabs(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li key={city.name} className="locations__item">
            <Link
              className={cn('locations__item-link tabs__item', {
                'tabs__item--active': city.name === currentCity,
              })}
              onClick={(event) => {
                event.preventDefault();

                dispatch(selectCityAction(city.name as CityName));
              }}
              to="#todo"
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const MemoCitiesTabs = React.memo(CitiesTabs);

export default MemoCitiesTabs;
