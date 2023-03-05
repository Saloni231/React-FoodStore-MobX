import { NavLink } from "react-router-dom";
import styles from "./NavigationHeader.module.css";
import CollapseButton from "./CollapseButton";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from "../../store/StoreContext";
import CartButton from "./CartButton";

const NavigationHeader = (props) => {
  const storeVal = useStores();

  const path = useLocation().pathname;

  useEffect(() => {
    storeVal.toggleStore.pathChangeHandler(false);
  }, [path, storeVal]);

  const logoutHandler = () => {
    props.logout();
    console.log(props.token);
  };

  return (
    <>
      {storeVal.toggleStore.toggle && (
        <div
          className={styles.backdrop}
          onClick={storeVal.toggleStore.toggleHandler}
        ></div>
      )}
      <header className={styles.header}>
        <div className={styles.brand}>
          <img
            src={require("../../Images/Food store-1.png")}
            alt="Food Store"
          />
          <p>FOOD STORE</p>
        </div>
        <CollapseButton
          onClick={storeVal.toggleStore.toggleHandler}
          style={styles.collapse}
        />
        <nav>
          <ul
            className={
              storeVal.toggleStore.toggle
                ? `${styles.list}  ${styles.expanded}`
                : `${styles.list}`
            }
          >
            {props.headers.map((header) => (
              <li key={header.id}>
                <NavLink
                  to={header.route}
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  end
                >
                  {header.name}
                </NavLink>
              </li>
            ))}
            {!props.token && (
              <li>
                <NavLink to="/login">
                  <Button>Login</Button>
                </NavLink>
              </li>
            )}
            {!props.token && (
              <li>
                <NavLink to="/register">
                  <Button>Register</Button>
                </NavLink>
              </li>
            )}
            {props.token && (
              <li>
                <CartButton />
              </li>
            )}
            {props.token && (
              <li>
                <Button onClick={logoutHandler}>Log Out</Button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default observer(NavigationHeader);
