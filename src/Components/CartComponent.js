import styles from "./CartComponent.module.css";
import Modal from "./UI/Modal";
import { useStores } from "../store/StoreContext";
import CartItem from "./CartItem";
import { observer } from "mobx-react";

function CartComponent(props) {
  const store = useStores();

  return (
    <Modal modalHandler={props.modalHandler}>
      <ul className={styles["cart-items"]}>
        {store.cartStore.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={store.cartStore.addItemToCart}
            onRemove={store.cartStore.removeItemToCart}
          ></CartItem>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>₹ {store.cartStore.totalAmount}</span>
      </div>
    </Modal>
  );
}

export default observer(CartComponent);
