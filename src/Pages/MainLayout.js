import { Fragment, useEffect } from "react";
import NavigationHeader from "../Components/UI/NavigationHeader";
import { Outlet, useLoaderData } from "react-router-dom";
import { useStores } from "../store/StoreContext";
import { observer } from "mobx-react";
import Cart from "./Cart";

const Layout = () => {
  const header = useLoaderData();

  const store = useStores();

  useEffect(() => {
    if (!store.authStore.token) {
      return;
    }

    if (store.authStore.token === "EXPIRED") {
      store.authStore.logOut();
    }

    const duration = store.authStore.getTokenDuration();

    setTimeout(() => {
      store.authStore.logOut();
    }, duration);
  });

  return (
    <Fragment>
      <NavigationHeader
        token={store.authStore.token}
        headers={header}
        logout={store.authStore.logOut}
      />
      {store.cartVisibleStore.isVisible && (
        <Cart modalHandler={store.cartVisibleStore.toggleCart} />
      )}
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default observer(Layout);

export async function loadHeader() {
  const response = await fetch("http://localhost:3002/headers");

  if (!response.ok) {
  } else {
    const data = await response.json();
    return data;
  }
}
