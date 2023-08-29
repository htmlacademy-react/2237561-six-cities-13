import { Navigate, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main/main';
import LoginScreen from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks/index';
import { fetchOffersAction } from '../../store/api-actions';
import { store } from '../../store/index';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import {
  getOffersDataLoading,
  getServerErrorStatus,
} from '../../store/offers-data/selectors';
import ErrorPage from '../../pages/error-page/error-page';

function App(): JSX.Element {
  useEffect(() => {
    store.dispatch(fetchOffersAction());
  }, []);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getOffersDataLoading);
  const isServerError = useAppSelector(getServerErrorStatus);

  if (isServerError) {
    return <ErrorPage />;
  }

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoaded) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen />} />
          <Route
            path={AppRoute.Login}
            element={
              authorizationStatus === AuthorizationStatus.Auth ? (
                <Navigate to={AppRoute.Main} />
              ) : (
                <LoginScreen />
              )
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.OfferId} element={<OfferPage />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
