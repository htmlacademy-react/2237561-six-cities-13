import { NameSpace } from '../../const';
import { TOffer, TFullOffer } from '../../types/offer';
import { TReview } from '../../types/review';
import { TState } from '../../types/state';

const getOffer = (state: TState): TFullOffer | null =>
  state[NameSpace.Offer].offerItem;
const getNearOffers = (state: TState): TOffer[] =>
  state[NameSpace.Offer].nearOffers;
const getOfferDataLoading = (state: TState): boolean =>
  state[NameSpace.Offer].isOfferDataLoading;
const getReviews = (state: TState): TReview[] | null =>
  state[NameSpace.Offer].reviews;

export { getOffer, getNearOffers, getOfferDataLoading, getReviews };
