import { TOffer } from '../types/offer';

export function randomInteger(min: number, max: number): number {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function nearByCities(offers: TOffer[]): TOffer[] {
  const nearByOffers = new Set();
  while (nearByOffers.size < 3) {
    nearByOffers.add(offers[randomInteger(0, offers.length - 1)]);
  }
  return Array.from(nearByOffers) as TOffer[];
}
