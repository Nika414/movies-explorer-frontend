export default class MainApi {
  constructor(options) {
    this._mainUrl = options.mainUrl;
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Error occurred');
  }

  saveCard(movie) {
    return fetch(`${this._mainUrl}movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDkxNDg2ZmEzZGYxY2U0NTljOGI5MiIsImlhdCI6MTY3NTE3MzgzNiwiZXhwIjoxNjc1Nzc4NjM2fQ.ZzGd7YA5wu-aA5IRLFjTM6F09sJCmm5QmZ_NwyHNgQM',
      },
      body: JSON.stringify(movie),
    }).then((res) => this._handleResponse(res));
  }

  getSavedCards() {
    return fetch(`${this._mainUrl}movies`, {
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDkxNDg2ZmEzZGYxY2U0NTljOGI5MiIsImlhdCI6MTY3NTE3MzgzNiwiZXhwIjoxNjc1Nzc4NjM2fQ.ZzGd7YA5wu-aA5IRLFjTM6F09sJCmm5QmZ_NwyHNgQM',
      },
    }).then((res) => this._handleResponse(res));
  }

  deleteSavedCards(id) {
    return fetch(`${this._mainUrl}movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDkxNDg2ZmEzZGYxY2U0NTljOGI5MiIsImlhdCI6MTY3NTE3MzgzNiwiZXhwIjoxNjc1Nzc4NjM2fQ.ZzGd7YA5wu-aA5IRLFjTM6F09sJCmm5QmZ_NwyHNgQM',
      },
    }).then((res) => this._handleResponse(res));
  }
}
