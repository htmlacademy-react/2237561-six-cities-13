import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store/index';
import App from './components/app';
import {allReviews} from './components/offers-review/reviews-mocks';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthAction} from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        reviews={allReviews}
      />
    </Provider>
  </React.StrictMode>
);
