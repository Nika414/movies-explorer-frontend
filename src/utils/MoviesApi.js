/* eslint-disable no-console */
export default class MoviesApi {
  constructor(options) {
    this._beatfilmUrl = options.beatfilmUrl;
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Error occurred');
  }

  getCards() {
    return fetch(this._beatfilmUrl)
      .then((res) => this._handleResponse(res))
      .catch((err) => console.log(err));
  }
}
