import React, { useEffect, useState } from "react";

import styles from "./CartButton.module.css";
import CartIcon from "../UI/CartIcon";
import { useStores } from "../../store/StoreContext";
import { observer } from "mobx-react";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const store = useStores();

  const numberOfItems = store.cartStore.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (store.cartStore.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [store.cartStore.items]);

  return (
    <button className={btnClasses} onClick={store.cartVisibleStore.toggleCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default observer(CartButton);
