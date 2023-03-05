import Card from "../Components/UI/Card";
import styles from "./AboutPageComponent.module.css";

const AboutPageComponent = (props) => {
  return (
    <>
      <div className={styles.description}>
        <img src={require("../Images/about.png")} alt="plate" />
        <p>{props.data.aboutDescription}</p>
      </div>
      <div className={styles.cards}>
        <Card style={styles.detail}>
          <h2>{props.data.detailHeader}</h2>
          <p>{props.data.detail}</p>
          <a href={props.data.detailURL} target="_blank" rel="noreferrer">
            Read More
          </a>
        </Card>
        <Card style={styles.block}>
          <img src={props.data.image} alt="about" />
        </Card>
      </div>
    </>
  );
};

export default AboutPageComponent;
