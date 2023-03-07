import { render, screen } from "@testing-library/react";
import RecipeComponent from "../Components/RecipeComponent";
import RecipeItem from "../Components/RecipeItem";

describe("recipe Page Component", () => {
  const recipes = [{ id: 1, name: "food", price: 10, image: "image.png" }];

  test("rendering recipe item", () => {
    render(<RecipeComponent recipes={recipes} />);

    const image = screen.getByAltText(recipes[0].name);
    expect(image).toBeInTheDocument();

    const name = document.querySelector("h3");
    expect(name.textContent).toMatch(recipes[0].name);

    const price = document.querySelector("p");
    expect(price.textContent).toMatch(`$ ${recipes[0].price}`);
  });

  test("testing visiblity of add to cart button", () => {
    render(<RecipeItem recipe={recipes[0]} isVisible={true} />);

    const button = screen.getByText("Add To Cart");
    expect(button).toBeInTheDocument();
  });
});
