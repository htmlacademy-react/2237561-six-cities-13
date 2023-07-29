import { TOffer } from '../../types/offer';
import CitiesCard from '../cities-card/card';

type TListOffers = {
  offers: TOffer[];
  onCardHover: (id: string | null) => void;
};

export default function ListOffers({ offers, onCardHover }: TListOffers): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          offer={offer}
          onCardHover={onCardHover}
        />
      ))}
    </div>
  );
}
