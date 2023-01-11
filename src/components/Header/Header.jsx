import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { routeName } from '../../utils/constants';

export default function Header({ loggedIn, location }) {
  return (
    <header className={`header ${location !== routeName.main && 'header__location_authorized'}`}>
      <Link className={`${(location === routeName.register || location === routeName.login) && 'header__logo_link'}`} to={routeName.main}>
        <img src={Logo} alt="Лого" className={`header__logo ${(location === routeName.register || location === routeName.login) && 'header__logo_location_auth'}`} />
      </Link>
      {(location !== routeName.register && location !== routeName.login)
      && (<Navigation loggedIn={loggedIn} location={location} />)}
    </header>
  );
}
