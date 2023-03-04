import { NavLink } from "react-router-dom";
import styles from "./NavigationHeader.module.css";
import CollapseButton from "./CollapseButton";
import Button from "./UI/Button";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react";
import store from "../store/CollapseToggle";
import { useEffect } from "react";

const NavigationHeader = observer(() => {
  const storeVal = store;

  const path = useLocation().pathname;

  useEffect(() => {
    storeVal.pathChangeHandler(false);
  }, [path, storeVal]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img src={require("../Images/Food store-1.png")} alt="Food Store" />
          <p>FOOD STORE</p>
        </div>
        <CollapseButton
          onClick={storeVal.toggleHandler}
          style={styles.collapse}
        />
        <nav>
          <ul
            className={
              storeVal.toggle
                ? `${styles.list}  ${styles.expanded}`
                : `${styles.list}`
            }
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <Button>Register</Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
});

export default NavigationHeader;
