import Card from "./UI/Card";
import styles from "./RecipeItem.module.css";
import Button from "./UI/Button";

function RecipeItem(props) {
  const addItem = () => {
    props.addItem(props.recipe);
  };

  return (
    <Card style={styles.recipe} showToast={props.showToast}>
      <img src={props.recipe.image} alt={props.recipe.name} />
      <h3>{props.recipe.name}</h3>
      <p>$ {props.recipe.price}</p>
      {props.isVisible && (
        <Button style={styles.action} onClick={addItem}>
          Add To Cart
        </Button>
      )}
    </Card>
  );
}

export default RecipeItem;
