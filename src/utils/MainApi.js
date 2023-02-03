export default class MainApi {
  constructor(options, jwt) {
    this._mainUrl = options.mainUrl;
    this._headers = {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    };
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Error occurred');
  }

  saveCard(movie) {
    return fetch(`${this._mainUrl}movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then((res) => this._handleResponse(res));
  }

  getSavedCards() {
    return fetch(`${this._mainUrl}movies`, {
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  deleteSavedCards(id) {
    return fetch(`${this._mainUrl}movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }

  getCurrentUser() {
    return fetch(`${this._mainUrl}users/me`, {
      headers: this._headers,
    }).then((res) => this._handleResponse(res));
  }
}
