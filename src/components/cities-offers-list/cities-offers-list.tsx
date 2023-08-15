import cn from 'classnames';
import { TOffer } from '../../types/offer';
import { TSorting } from '../../types/sorting';
import { sorting } from '../common/sort';
import CitiesCard from '../offer-card/card';

type TListOffers = {
  offers: TOffer[];
  activeSorting: TSorting;
  onCardHover: (id: string | null) => void;
  isMainOfferList?: boolean;
};

export default function ListOffers({ offers, activeSorting, onCardHover, isMainOfferList }: TListOffers): JSX.Element {
  return (
    <div
      className={cn(
        'places__list',
        {'cities__places-list': isMainOfferList},
        {'tabs__content': isMainOfferList},
        {'near-places__list': !isMainOfferList}
      )}
    >
      {sorting[activeSorting](offers).map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          onCardHover={onCardHover}
          isMainOfferList={isMainOfferList}
        />
      ))}
    </div>
  );
}
