import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import styles from './not-found.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities not found</title>
      </Helmet>
      <div className={styles.wrapper}>
        <h1>404 Not Found</h1>
        <div className={styles.icon404}>
          <Link to={AppRoute.Main}>Houston, we have a problem. Try again!</Link>
        </div>
      </div>
    </>
  );
}
export default NotFoundScreen;
