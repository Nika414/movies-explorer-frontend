import CardLike from '../CardLike';
import pic from '../../images/pic_example.png';
import CardDelete from '../CardDelete';

export default function MoviesCard({ savedMovies }) {
  return (
    <li className="card">
      <img className="card__img" src={pic} alt="Название карточки" />
      <div className="card__container">
        <h3 className="card__title">
          Movie name
        </h3>
        {
          savedMovies ? <CardDelete /> : <CardLike />
        }
      </div>
      <span className="card__timing">
        1ч 15мин
      </span>
    </li>
  );
}
