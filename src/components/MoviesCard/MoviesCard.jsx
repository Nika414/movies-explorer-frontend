/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState } from 'react';
import CardLike from '../CardLike';
import CardDelete from '../CardDelete';
import { options } from '../../utils/constants';
import MainApi from '../../utils/MainApi';

export default function MoviesCard({
  savedMovies, card, onDelete, onLike,
}) {
  const api = new MainApi(options, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDkxNDg2ZmEzZGYxY2U0NTljOGI5MiIsImlhdCI6MTY3NTE3MzgzNiwiZXhwIjoxNjc1Nzc4NjM2fQ.ZzGd7YA5wu-aA5IRLFjTM6F09sJCmm5QmZ_NwyHNgQM');
  const [isLiked, setIsLiked] = useState(card.saved || false);

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  function handleLike() {
    if (!isLiked) {
      setIsLiked(true);
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
      }).then((res) => {
        onLike(card.id, res._id);
        console.log(res);
      }).catch((err) => console.log(err));
    } else {
      setIsLiked(false);
      api.deleteSavedCards(card._id).then((res) => onLike(card.id, res._id));
    }
  }

  function handleDelete() {
    api.deleteSavedCards(card._id).then((res) => {
      console.log(res);
    });
    onDelete(card._id);
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
          savedMovies ? <CardDelete onClick={handleDelete} /> : <CardLike onClick={handleLike} isLiked={isLiked} />
        }
      </div>
      <span className="card__timing">
        {getTimeFromMins(card.duration)}
      </span>
    </li>
  );
}
