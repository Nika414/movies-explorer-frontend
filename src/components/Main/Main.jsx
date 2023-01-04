import AboutProject from '../AboutProject/AboutProject';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';

export default function Main() {
  return (
    <main>
      <Navigation />
      <Promo />
      <NavTab />
      <AboutProject />
    </main>
  );
}
