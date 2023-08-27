import { TOffer } from '../types/offer';
import {TSorting} from '../types/sorting';

const STARS_COUNT = 5;

function getRating(rating: number) {
  return `${(100 * Math.round(rating)) / STARS_COUNT}%`;
}
function sortByRating (a: TOffer, b: TOffer){
  return b.rating - a.rating;
}
function sortLowToHigh (a: TOffer, b: TOffer){
  return a.price - b.price;
}
function sortHighToLow (a: TOffer, b: TOffer){
  return b.price - a.price;
}

const sorting: Record <TSorting, (offers: TOffer[]) => TOffer[]> =
{
  Popular: (offers: TOffer[]) => offers.slice(),
  HighToLow: (offers: TOffer[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: TOffer[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: TOffer[]) => offers.slice().sort(sortByRating),
};

export {getRating, sorting};
