import RecipeItem from "./RecipeItem";
import styles from "./RecipeComponent.module.css";
import { useStores } from "../store/StoreContext";
import { Fragment, useState } from "react";
import { observer } from "mobx-react";

function RecipeComponent(props) {
  const [toastClass, setToastClass] = useState(styles.toast);

  const store = useStores();

  const showToast = () => {
    if (!store.authStore.token) {
      setToastClass(`${styles.toast} ${styles.show}`);
      setTimeout(() => {
        setToastClass(styles.toast);
      }, 3000);
    }
  };

  return (
    <Fragment>
      <div className={styles.recipes}>
        {props.recipes.map((item) => (
          <RecipeItem
            recipe={item}
            key={item.id}
            showToast={showToast}
            addItem={store.cartStore.addItemToCart}
            isVisible={store.authStore.token}
          />
        ))}
      </div>
      <div className={toastClass}>Please Login/Sign Up to Add Item to Cart</div>
    </Fragment>
  );
}

export default observer(RecipeComponent);
