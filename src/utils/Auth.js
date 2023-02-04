/* eslint-disable no-console */
export default class AuthApi {
  constructor(options) {
    this._headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    this._mainUrl = options.mainUrl;
  }

  register(name, password, email) {
    return fetch(`${this._mainUrl}signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, password, email }),
    });
  }

  login(password, email) {
    return fetch(`${this._mainUrl}signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    });
  }
}
