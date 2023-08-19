import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/index';
import { setActiveCity } from '../../store/actions';
import { TCity } from '../../types/city';

import cn from 'classnames';

type CitiesTabsItemProps = {
  city: TCity;
  isActive: boolean;
  locationClickHandler: (location: string) => void;
};

export default function CitiesTabsItem({
  city,
  isActive,
  locationClickHandler,
}: CitiesTabsItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li
      className="locations__item"
      onClick={() => {
        locationClickHandler(city.name);
        dispatch(setActiveCity(city));
      }}
    >
      <Link
        className={cn('locations__item-link tabs__item', {
          'tabs__item--active': isActive,
        })}
        to="#todo"
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}
