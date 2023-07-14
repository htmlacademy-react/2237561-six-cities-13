import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Email(): JSX.Element {
  return (
    <Link to={AppRoute.Favorites} className="header__logo-link">
      <span className="header__user-name user__name">
        Oliver.conner@gmail.com
      </span>
    </Link>
  );
}

export default Email;
