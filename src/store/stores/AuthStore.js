import { makeAutoObservable } from "mobx";

class AuthStore {
  token = localStorage.getItem("token");
  tokenDuration = localStorage.getItem("expiration");

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setToken(email) {
    localStorage.setItem("token", email);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    this.token = localStorage.getItem("token");
    this.tokenDuration = this.getTokenDuration;
  }

  getTokenDuration() {
    const storedExpirationDate = localStorage.getItem("expiration");
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  }

  getAuthToken() {
    this.token = localStorage.getItem("token");
    this.tokenDuration = this.getTokenDuration;

    if (!this.token) {
      return null;
    }

    if (this.tokenDuration < 0) {
      return "EXPIRED";
    }

    return this.token;
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    this.token = null;
    this.tokenDuration = null;
  }
}

let storeAuth = new AuthStore();

export default storeAuth;
