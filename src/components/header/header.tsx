import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks/index';
import { AuthorizationStatus } from '../../const';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
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
