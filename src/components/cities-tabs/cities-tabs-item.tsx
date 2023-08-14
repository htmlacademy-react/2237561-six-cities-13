import {useAppDispatch} from '../../store/index';
import {setActiveCity, fetchOffers} from '../../store/actions';
import { TCity } from '../../types/city';

import cn from 'classnames';

type CitiesTabsItemProps = {
  city: TCity;
  isActive: boolean;
  locationClickHandler: (location: string) => void;
};

export default function CitiesTabsItem({city, isActive, locationClickHandler}: CitiesTabsItemProps): JSX.Element {
  //const currentLocation = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item"
      onClick={(evt) => {
        evt.preventDefault();

        locationClickHandler(city.name);
        dispatch(setActiveCity(city));
        dispatch(fetchOffers(city.name));
      }}
    >
      <a
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': isActive
        })}
        href="#todo"

      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
