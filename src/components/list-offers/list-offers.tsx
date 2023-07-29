import { useState } from 'react';
import { TOffer } from '../../types/offer';
import CitiesCard from '../cities-card/card';

type TListOffers = {
  offers: TOffer[];
};

export default function ListOffers({ offers }: TListOffers): JSX.Element {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content" data-active-card={activeCard}>
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id.toString()}
          offer={offer}
          onCardHover={setActiveCard}
        />
      ))}
    </div>
  );
}
