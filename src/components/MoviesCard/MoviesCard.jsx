/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import CardLike from '../CardLike';
import CardDelete from '../CardDelete';
import { options } from '../../utils/constants';
import MainApi from '../../utils/MainApi';

export default function MoviesCard({ savedMovies, card, onDelete }) {
  const api = new MainApi(options);

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  function handleDelete() {
    api.deleteSavedCards(card._id).then((res) => console.log(res));
    onDelete(card._id);
  }

  function handleLike() {
    api.saveCard({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      thumbnail: `${options.baseUrl}${card.image.formats.thumbnail.url}`,
      image: `${options.baseUrl}${card.image.url}`,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      trailer: card.trailerLink,
    })
      .catch((err) => console.log(err));
  }
  return (
    <li className="card">
      <a
        className="card__link"
        href={savedMovies ? card.trailer : card.trailerLink}
      >
        <img className="card__img" src={`${savedMovies ? card.image : `${options.baseUrl}${card.image.url}`}`} alt={card.nameRU} />
      </a>
      <div className="card__container">
        <h3 className="card__title">
          {card.nameRU}
        </h3>
        {
          savedMovies ? <CardDelete onClick={handleDelete} /> : <CardLike onClick={handleLike} />
        }
      </div>
      <span className="card__timing">
        {getTimeFromMins(card.duration)}
      </span>
    </li>
  );
}
