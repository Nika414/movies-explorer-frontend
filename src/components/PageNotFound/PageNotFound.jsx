import { useHistory } from 'react-router-dom';

export default function PageNotFound() {
  const history = useHistory();

  return (
    <div className="page-not-found">
      <span className="page-not-found__span_size_big">404</span>
      <span className="page-not-found__span_size_small">Страница не найдена</span>
      <button className="page-not-found__button" type="button" onClick={history.goBack}>Назад</button>
    </div>
  );
}
