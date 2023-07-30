import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../pages/main/main';
import LoginScreen from '../pages/login/login';
import FavoritesPage from '../pages/favorites/favorites';
import OfferPage from '../pages/offer/offer';
import NotFoundScreen from '../pages/not-found/not-found';
import PrivateRoute from './private-route/private-route';
import {TOffer, TFullOffer} from '../types/offer';
import {TReview} from '../types/review';

type AppScreenProps = {
  offersCount: number;
  offers: TOffer[];
  fullOffers: TFullOffer[];
  reviews: TReview[];
  nearOffers: TOffer[];
};

function App({ offersCount, offers, fullOffers, reviews, nearOffers}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen offersCount={offersCount} offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.OfferId}
            element={<OfferPage fullOffers= {fullOffers} reviews={reviews} nearOffers={nearOffers}/>}
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
