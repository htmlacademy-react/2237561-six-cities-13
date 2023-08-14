import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from './components/app';
import {offersList, fullOffers, nearOffers} from './mocks/offers';
import {allReviews} from './mocks/review';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers = {offersList}
        fullOffers = {fullOffers}
        reviews={allReviews}
        nearOffers={nearOffers}
      />
    </Provider>
  </React.StrictMode>
);
