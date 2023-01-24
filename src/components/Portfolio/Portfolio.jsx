import arrow from '../../images/link-arrow.svg';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__span">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__option">
          <a target="_blank" className="portfolio__link" href="https://nika414.github.io/how-to-learn/" rel="noreferrer">
            Статичный сайт
            <img src={arrow} alt="Перейти" className="portfolio__arrow" />
          </a>
        </li>
        <li className="portfolio__option">
          <a target="_blank" className="portfolio__link" href="https://nika414.github.io/russian-travel/" rel="noreferrer">
            <img src={arrow} alt="Перейти" className="portfolio__arrow" />
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__option">
          <a target="_blank" className="portfolio__link" href="https://mmesto.nomoredomains.club/" rel="noreferrer">
            <img src={arrow} alt="Перейти" className="portfolio__arrow" />
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}
