import CardLike from '../App/CardLike';
import pic from '../../images/pic_example.png';

export default function MoviesCard() {
  return (
    <div className="card">
      <img className="card__img" src={pic} alt="Название карточки" />
      <div className="card__container">
        <h3 className="card__title">
          Movie name
        </h3>
        <CardLike />
      </div>
      <span className="card__timing">
        1ч 15мин
      </span>
    </div>
  );
}
