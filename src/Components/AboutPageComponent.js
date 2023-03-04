import Card from "../Components/UI/Card";
import styles from "./AboutPageComponent.module.css";

const AboutPageComponent = () => {
  return (
    <div className={styles.about}>
      <div className={styles.description}>
        <img src={require("../Images/about.png")} alt="plate" />
        <p>
          Food Store Is The Only Online Supermarket You Need. Daily Needs
          Delivered To Your Home Faster Than Supermarkets, Only On Food Store.
        </p>
      </div>
      <div className={styles.cards}>
        <Card style={styles.detail}>
          <h1>Best Food</h1>
          <p>
            An online store for high-quality commercial kitchen equipment where
            restaurateurs can find everything their business needs to function
            at its best. Some popular types of ethnic foods include Italian,
            French, Japanese, Chinese, American, Cajun, Thai, African, Indian
            and Nepalese.
          </p>
          <a href="https://iamafoodblog.com/" target="_blank">
            Read More
          </a>
        </Card>
        <Card style={styles.block}>
            <img src={require("../Images/pageimg.jpg")} alt="about" />
        </Card>
      </div>
    </div>
  );
};

export default AboutPageComponent;
