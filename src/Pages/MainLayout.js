import { Fragment } from "react";
import NavigationHeader from "../Components/NavigationHeader";
import { Outlet, useLoaderData } from "react-router-dom";

const Layout = () => {

  const header = useLoaderData();

  return (
    <Fragment>
      <NavigationHeader headers={header} />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;

export async function loadHeader() {
  const response = await fetch("http://localhost:3002/headers");

    if(!response.ok) {}
    else {
        const data = await response.json();
        return data;
    }
}
