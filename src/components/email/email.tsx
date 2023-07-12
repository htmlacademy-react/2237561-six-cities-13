import { Link } from 'react-router-dom';

function Email(): JSX.Element {
  return (
    <Link className="header__logo-link" to="#todo">
      <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
      </span>
    </Link>
  );
}

export default Email;
