import Card from './UI/Card';
import styles from './RecipeItem.module.css';

function RecipeItem (props) {
    return (
        <Card style={styles.recipe} >
            <img src={props.recipe.image} alt={props.recipe.name} />
            <h3>{props.recipe.name}</h3>
            <p>₹ {props.recipe.price}</p>
        </Card>
    )
}

export default RecipeItem;