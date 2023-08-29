import React, { useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { getSort } from '../../store/offers-data/selectors';
import { changeSort } from '../../store/offers-data/offers-data';

export function OffersListSort(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const sortType = useAppSelector(getSort);
  const dispatch = useAppDispatch();

  function handleKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeydown}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {Object.entries(SortType).map(([key, label]) => (
          <li
            key={key}
            className={cn('places__option', {
              'places__option--active': sortType === label,
            })}
            tabIndex={0}
            onClick={() => dispatch(changeSort(label))}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
const MemoOffersListSort = React.memo(OffersListSort);
export default MemoOffersListSort;
