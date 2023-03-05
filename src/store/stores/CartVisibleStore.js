import { makeAutoObservable } from "mobx";

class CartVisibleStore {
  isVisible = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  toggleCart() {
    this.isVisible = !this.isVisible;
  }
}

let storeVisible = new CartVisibleStore();

export default storeVisible;
