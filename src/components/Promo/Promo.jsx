import MainLogo from '../../images/pic__COLOR_landing-logo.png';

export default function Promo() {
  return (
    <div className="promo__header">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={MainLogo} alt="Лого" className="promo__img" />
    </div>

  );
}
