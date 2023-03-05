import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const addItem = () => {
    props.onAdd(props.item);
  };

  const removeItem = () => {
    props.onRemove(props.item);
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <div>
        <h2>{props.item.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>₹ {props.item.price}</span>
          <span className={styles.amount}>x {props.item.quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeItem}>−</button>
        <button onClick={addItem}>+</button>
      </div>
      <div>
        <span className={styles.price}>
          <h3>Amount:</h3> ₹ {props.item.amount}
        </span>
      </div>
    </li>
  );
};

export default CartItem;
