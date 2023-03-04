import RecipeItem from "./RecipeItem";
import styles from './RecipeComponent.module.css';

function RecipeComponent(props) {
    return (
        <div className={styles.recipes} >
        {props.recipes.map((item) => (
            <RecipeItem recipe = {item} key={item.id} />
        ))}
        </div>
    )
}

export default RecipeComponent;