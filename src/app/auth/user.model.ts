export class User {
  email: string;
  id: string;
  private _token;
  private _tokenExpirationDate: Date;

  constructor(email: string, id: string, token: string, tokenExpirationDate: Date) {
    this.email = email;
    this.id = id;
    this._token = token;
    this._tokenExpirationDate = tokenExpirationDate;
  }

  get token() {
    return this._token;
  }
}
