import styles from "./HomePageComponent.module.css";
import Button from "./UI/Button";

const HomePageComponent = (props) => {
  return (
    <div className={styles.home}>
      <div className={styles["home-msg"]}>
        <h1>{props.data.text}</h1>
        <p>{props.data.description}</p>
        <br />
        <Button>Order Now</Button>
      </div>
      <div>
        <img
          src={props.data.image}
          id="burgerimg"
          alt="burger"
        />
      </div>
    </div>
  );
};

export default HomePageComponent;
