import cn from 'classnames';
import { TOffer } from '../../types/offer';
import CitiesCard from '../offer-card/card';

type TListOffers = {
  offers: TOffer[];
  onCardHover: (id: string | null) => void;
  isMainOfferList?: boolean;
};

export default function ListOffers({ offers, onCardHover, isMainOfferList }: TListOffers): JSX.Element {
  return (
    <div
      className={cn(
        'places__list',
        {'cities__places-list': isMainOfferList},
        {'tabs__content': isMainOfferList},
        {'near-places__list': !isMainOfferList}
      )}
    >
      {offers.map((offer) => (
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
