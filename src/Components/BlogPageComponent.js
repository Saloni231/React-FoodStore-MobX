import styles from "./BlogPageComponent.module.css";
import Card from "./UI/Card";

function BlogPageComponent(props) {
  return (
    <>
      <div className={styles.description}>
        <img src={require("../Images/about.png")} alt="plate" />
        <p>
          Food Store Is The Only Online Supermarket You Need. Daily Needs
          Delivered To Your Home Faster Than Supermarkets, Only On Food Store.
        </p>
      </div>
      <div className={styles.blog}>
        {props.data.map((blog) => (
          <Card key={blog.id}>
            <div className={styles.date}>{blog.date}</div>
            <img src={blog.image} alt={blog.title} />
            <hr />
            <h4>{blog.title}</h4>
            <p>{blog.description}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BlogPageComponent;
