import {useAppDispatch, useAppSelector} from '../../store/index';
import {setActiveCity, fetchOffers} from '../../store/actions';
import { TCity } from '../../types/city';

import cn from 'classnames';

type CitiesTabsItemProps = {
  location: TCity;
};

export default function CitiesTabsItem({location}: CitiesTabsItemProps): JSX.Element {
  const currentLocation = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <a
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': location === currentLocation
        })}
        href="#todo"
        onClick={(evt) => {
          evt.preventDefault();

          dispatch(setActiveCity(location));
          dispatch(fetchOffers(location.name));
        }}
      >
        <span>{location.name}</span>
      </a>
    </li>
  );
}
