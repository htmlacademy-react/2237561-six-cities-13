import { TOffer } from '../types/offer';

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

export {getRating, sortByRating, sortLowToHigh, sortHighToLow};
