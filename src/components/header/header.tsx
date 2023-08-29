import { AuthorizationStatus } from '../../const';
import SignIn from '../header-sign-in/header-sign-in';
import SignOut from '../header-sign-out/header-sign-out';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthorizationStatus.Auth ? (
                <SignOut />
              ) : (
                <SignIn />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
