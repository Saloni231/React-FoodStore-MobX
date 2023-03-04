import { Fragment } from "react";
import NavigationHeader from "../Components/NavigationHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <NavigationHeader />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
