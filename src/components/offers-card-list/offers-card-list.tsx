import cn from 'classnames';
import { TOffer } from '../../types/offer';
import { TSorting } from '../../types/sorting';
import { sorting } from '../../utils/sort-offers';
import OfferCard from '../offer-card/offer-card';

type TOfferCardList = {
  offers: TOffer[];
  activeSorting: TSorting;
  onCardHover: (id: string | null) => void;
  isMainOfferList?: boolean;
};

export default function OfferCardList({ offers, activeSorting, onCardHover, isMainOfferList }: TOfferCardList): JSX.Element {
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
        <OfferCard
          key={offer.id}
          offer={offer}
          onCardHover={onCardHover}
          isMainOfferList={isMainOfferList}
        />
      ))}
    </div>
  );
}
