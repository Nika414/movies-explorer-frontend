export default class AuthApi {
  constructor(options) {
    this._headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    this._mainUrl = options.mainUrl;
  }

  _handleResponse(res) {
    if (res.ok) { return res.json(); }
    throw new Error('Error occurred');
  }

  register(name, password, email) {
    return fetch(`${this._mainUrl}signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, password, email }),
    }).then((res) => this._handleResponse(res));
  }

  login(password, email) {
    return fetch(`${this._mainUrl}signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    }).then((res) => this._handleResponse(res));
  }
}
