import {TOffer} from './types/offer';

export function getOffersByLocation(offers: TOffer[], location: string) {
  return offers.filter((offer) => offer.city.name === location);
}
