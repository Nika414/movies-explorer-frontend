import arrow from '../../images/link-arrow.svg';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <span className="portfolio__span">Портфолио</span>
      <ul className="portfolio__container">
        <li className="portfolio__option">
          <a className="portfolio__link" href="https://nika414.github.io/how-to-learn/">
            Статичный сайт
            <img src={arrow} alt="Перейти" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__option">
          <a className="portfolio__link" href="https://nika414.github.io/russian-travel/">
            <img src={arrow} alt="Перейти" className="portfolio__arrow" />
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__option">
          <a className="portfolio__link" href="https://mmesto.nomoredomains.club/">
            <img src={arrow} alt="Перейти" className="portfolio__arrow" />
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}
