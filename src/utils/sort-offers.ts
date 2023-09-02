import { TOffer } from '../types/offer';

function sortByRating (a: TOffer, b: TOffer){
  return b.rating - a.rating;
}
function sortLowToHigh (a: TOffer, b: TOffer){
  return a.price - b.price;
}
function sortHighToLow (a: TOffer, b: TOffer){
  return b.price - a.price;
}

export {sortByRating, sortLowToHigh, sortHighToLow};
