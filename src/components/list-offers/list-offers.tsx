import { TOffers } from '../../types/offer';
import CitiesCard from '../cities-card/card';

type TListOffers = {
  offers: TOffers;
};

export default function ListOffers({ offers }: TListOffers): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
