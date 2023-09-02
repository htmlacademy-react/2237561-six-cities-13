import React from 'react';
import { MouseEvent, useEffect } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, DEFAULT_IMG_AVATAR } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { logoutAction, fetchFavoritesAction } from '../../store/api-actions';
import { getUserData } from '../../store/user-process/selectors';
import { getFavoritesCount } from '../../store/favorites-data/selectors';

function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const favoritesCount = useAppSelector(getFavoritesCount);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const handleOnClick = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <React.Fragment>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div
            className={cn('header__avatar-wrapper', 'user__avatar-wrapper')}
            style={{
              backgroundImage: `url(${
                userData?.avatarUrl ?? DEFAULT_IMG_AVATAR
              })`,
            }}
          >
          </div>
          <span className="header__user-name user__name">
            {userData?.email}
          </span>
          <span className="header__favorite-count">{favoritesCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          onClick={handleOnClick}
          className="header__nav-link"
          to={AppRoute.Login}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default SignOut;
