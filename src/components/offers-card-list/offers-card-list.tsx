import React from 'react';
import { CardClass } from '../../const';
import { TOffer } from '../../types/offer';
import MemoPlaceCard from '../offer-card/offer-card';

type TOfferCardList = {
  offers: TOffer[];
};

function OfferCardList({ offers }: TOfferCardList): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <MemoPlaceCard key={offer.id} offer={offer} cardClass={CardClass.CITY} />
      ))}
    </div>
  );
}

const MemoOfferCardList = React.memo(OfferCardList);
export default MemoOfferCardList;
