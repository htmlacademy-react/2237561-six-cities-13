import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../pages/main/main';
import LoginScreen from '../pages/login/login';
import FavoritesPage from '../pages/favorites/favorites';
import OfferPage from '../pages/offer/offer';
import NotFoundScreen from '../pages/not-found/not-found';
import PrivateRoute from './private-route/private-route';
import {TReview} from '../types/review';
import Spinner from '../pages/spinner/spinner';
import { useAppSelector } from '../hooks/index';
import { fetchOffersAction } from '../store/api-actions';
import {store} from '../store/index';

type AppScreenProps = {
  reviews: TReview[];
};

function App({ reviews}: AppScreenProps): JSX.Element {

  useEffect(() => {
    store.dispatch(fetchOffersAction());
  }, []);

  const isOffersLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.OfferId}
            element={<OfferPage reviews={reviews}/>}
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
