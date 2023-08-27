import { MAX_REVIEWS_COUNT } from '../const';
import {TReview} from '../types/review';

function sortingReviews(a: TReview, b: TReview) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return Number(dateB) - Number(dateA);
}

export function sortReviewsByDate(reviews: TReview[]): TReview[] {
  return reviews.slice().sort(sortingReviews).slice(0, MAX_REVIEWS_COUNT);
}
