import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page not-found">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left"></div>
          </div>
        </div>
      </header>
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
                style={{ textAlign: 'center', marginTop: '10%' }}
              />
              <Link to="/">
                <h1 style={{ textAlign: 'center' }}>Вернуться на главную</h1>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
export default NotFoundScreen;
