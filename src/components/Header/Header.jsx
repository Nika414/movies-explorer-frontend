import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn, location }) {
  return (
    <header className={`header ${location !== '/' && 'header__location_authorized'}`}>
      <Link className={`${(location === '/sign-up' || location === '/sign-in') && 'header__logo_link'}`} to="/">
        <img src={Logo} alt="Лого" className={`header__logo ${(location === '/sign-up' || location === '/sign-in') && 'header__logo_location_auth'}`} />
      </Link>
      {(location !== '/sign-up' && location !== '/sign-in') && (<Navigation loggedIn={loggedIn} location={location} />)}

    </header>
  );
}
