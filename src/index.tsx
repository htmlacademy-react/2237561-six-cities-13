import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {Setting} from './const';
import {offersList, fullOffers} from './mocks/offers';
import {allReviews} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OffersCount}
      offers = {offersList}
      fullOffers = {fullOffers}
      reviews={allReviews}
    />
  </React.StrictMode>
);
