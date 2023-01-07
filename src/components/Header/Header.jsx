import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn, location }) {
  return (
    <header className={`header ${location !== '/' && 'header_authorized'}`}>
      <img src={Logo} alt="Лого" className="navigation__logo" />
      <Navigation loggedIn={loggedIn} location={location} />
    </header>
  );
}
