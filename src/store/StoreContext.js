import React from "react";
import storeCollapse from "./stores/CollapseToggle";
import storeAuth from "./stores/AuthStore";
import storeCart from "./stores/CartStore";
import storeVisible from "./stores/CartVisibleStore";

const StoreContext = React.createContext({
  toggleStore: storeCollapse,
  authStore: storeAuth,
  cartVisibleStore: storeVisible,
  cartStore: storeCart,
});

export const useStores = () => React.useContext(StoreContext);
