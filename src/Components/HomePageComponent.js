import styles from "./HomePageComponent.module.css";
import Button from "./UI/Button";

const HomePageComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles["home-msg"]}>
        <h1>Discover Restaurents that deliver near you</h1>
        <p>
          A hamburger, or simply burger, is a food consisting of
          fillings—usually a patty of ground meat, typically beef—placed inside
          a sliced bun or bread roll.
        </p>
        <br />
        <Button>Order Now</Button>
      </div>
      <div>
        <img
          src={require("../Images/burger.png")}
          id="burgerimg"
          alt="burger"
        />
      </div>
    </div>
  );
};

export default HomePageComponent;
