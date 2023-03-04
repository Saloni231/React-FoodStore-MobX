import React from "react";
import storeCollapse from "./stores/CollapseToggle";
import storeRecipe from "./stores/RecipeStore";

const StoreContext = React.createContext({
    toggleStore: storeCollapse,
    recipeStore : storeRecipe
})

export const useStores = () => React.useContext(StoreContext);