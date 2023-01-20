export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__span">Учебный проект Яндекс.Практикум х BeatFilm.</span>
      <div className="footer__container">
        <span className="footer__year">&copy; 2023</span>
        <div className="footer__links">
          <a target="_blank" href="https://practicum.yandex.ru/" className="footer__praktikum" rel="noreferrer">Яндекс.Практикум</a>
          <a target="_blank" href="https://github.com/Nika414" className="footer__github" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  );
}
