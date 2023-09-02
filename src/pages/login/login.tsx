import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { loginAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import { AppRoute, AuthorizationStatus, Status } from '../../const';
import Logo from '../../components/logo/logo';
import { getLoginStatus, getAuthorizationStatus } from '../../store/user-process/selectors';
import { setLoginStatus } from '../../store/user-process/user-process';
import loginStyles from './login.module.css';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const regexPassword = /^(?=.*\d)(?=.*[a-z])\S*$/i;
  const regexLogin = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  const loginStatus = useAppSelector(getLoginStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const [isCorrectLogin, setIsCorrectLogin] = useState(true);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [authStatus, dispatch]);

  useEffect(() => {
    if (loginStatus === Status.Success && loginRef.current && passwordRef.current) {
      dispatch(setLoginStatus(Status.Idle));
      loginRef.current.value = '';
      passwordRef.current.value = '';
      dispatch(redirectToRoute(AppRoute.Main));
    }
  }, [dispatch, loginStatus]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsCorrectLogin(true);
    setIsCorrectPassword(true);

    if (loginRef.current && passwordRef.current) {
      if (!regexPassword.test(passwordRef.current.value)) {
        setIsCorrectPassword(false);
        return;
      }

      if (!regexLogin.test(loginRef.current.value)) {
        setIsCorrectLogin(false);
        return;
      }

      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities - Authorization</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                {!isCorrectLogin && <p className={loginStyles.login__error}>Enter a valid email</p>}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                {!isCorrectPassword &&
                  <p className={loginStyles.password__error}>
                    At least 1 letter and 1 number without spaces
                  </p>}
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Paris</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default LoginScreen;
