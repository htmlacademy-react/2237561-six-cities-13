import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import styles from './not-found.module.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page not-found">
      <Helmet>
        <title>6 cities not found</title>
      </Helmet>
      <main className="page main--not-found">
        <div className="page not-found-container container">
          <section className="page not-found">
            <div className="page__not-found-wrapper">
              <img
                className="not-found"
                src="https://i.ibb.co/qsQr6mL/pngwing-com.png"
                alt="6 cities not found"
                width="100%"
                height="100%"
                style={{ textAlign: 'center', marginTop: '15%' }}
              />
              <p className={styles.text}>
                Вернуться на{' '}
                <Link to={AppRoute.Main} className={styles.link}>
                  главную
                </Link>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default NotFoundScreen;
