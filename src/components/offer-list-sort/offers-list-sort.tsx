import { useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { SortType } from '../../const';
import { TSorting } from '../../types/sorting';

type OfferListSortProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
};
export function OffersListSort({
  activeSorting,
  onChange,
}: OfferListSortProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  function handleKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function hanleSortItemClick(type: TSorting) {
    onChange(type);
    setIsOpened(false);
  }
  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeydown}
    >
      <span className="places__sorting-caption">Sort by  </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {SortType[activeSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {(
          Object.entries(SortType) as [TSorting, (typeof SortType)[TSorting]][]
        ).map(([type, label]) => (
          <li
            key={type}
            className={cn('places__option', {
              'places__option--active': activeSorting === type,
            })}
            tabIndex={0}
            onClick={() => hanleSortItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default OffersListSort;
