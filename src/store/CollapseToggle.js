import { makeAutoObservable } from "mobx";

class CollapseToggle {
  toggle = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  toggleHandler() {
    this.toggle = !this.toggle;
  }

  pathChangeHandler(val) {
    this.toggle = val;
  }
}

let store = new CollapseToggle();

export default store;
