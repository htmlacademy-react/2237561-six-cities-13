import { Link } from 'react-router-dom';
import styles from './error.module.css';
import { AppRoute } from '../../const';

function ErrorPage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1>Houston, we have a problem!</h1>
      <Link to={AppRoute.Main}>Restart!</Link>
    </div>
  );
}

export default ErrorPage;
