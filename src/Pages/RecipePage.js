import { useLoaderData } from "react-router-dom";
import RecipeComponent from "../Components/RecipeComponent";

const RecipePage = () => {

    const recipes = useLoaderData();

    return (
        <RecipeComponent recipes={recipes} />
    );
}

export default RecipePage;

export async function loadRecipes() {
    const response = await fetch("http://localhost:3002/recipes");

    if(!response.ok) {}
    else {
        const data = await response.json();
        return data.Recipes
    }
}