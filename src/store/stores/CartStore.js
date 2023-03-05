const { makeAutoObservable } = require("mobx");

class CartStore {
  items = [];
  totalAmount = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addItemToCart(item) {
    this.totalAmount += item.price;

    let extistingItem = this.items.find((recipe) => recipe.id === item.id);

    if (extistingItem) {
      extistingItem.quantity += 1;
      extistingItem.amount += item.price;
    } else {
      this.items = [
        ...this.items,
        {
          id: item.id,
          image: item.image,
          name: item.name,
          price: item.price,
          quantity: 1,
          amount: item.price,
        },
      ];
    }
  }

  removeItemToCart(item) {
    this.totalAmount -= item.price;

    let extistingItem = this.items.find((recipe) => recipe.id === item.id);

    if (extistingItem.quantity > 1) {
      extistingItem.quantity -= 1;
      extistingItem.amount -= item.price;
    } else {
      this.items = this.items.filter((recipe) => recipe.id !== item.id);
    }
  }
}

let storeCart = new CartStore();

export default storeCart;
