import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavoritesAction } from '../../store/api-actions';
import { getAuthCheckedStatus } from '../../store/user-process/selectors';

type TBookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  isBigSize: boolean;
};
export default function FavoriteBookmarkButton({
  offerId,
  isFavorite,
  isBigSize,
}: TBookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(isFavorite);

  const handleButtonClick = () => {
    if (isAuth) {
      dispatch(
        setFavoritesAction({
          id: offerId,
          status: Number(!isActive),
        })
      );
      setIsActive((option) => !option);
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={cn(
        {
          'offer__bookmark-button': isBigSize,
          'offer__bookmark-button--active': isBigSize && isActive,
          'place-card__bookmark-button': !isBigSize,
          'place-card__bookmark-button--active': !isBigSize && isActive,
        },
        'button'
      )}
      type="button"
      onClick={handleButtonClick}
    >
      <svg
        className={isBigSize ? 'offer__bookmark-icon' : 'place-card__bookmark-icon'}
        width={isBigSize ? '31' : '18'}
        height={isBigSize ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
