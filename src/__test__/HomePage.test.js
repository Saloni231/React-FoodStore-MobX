import { render, screen } from "@testing-library/react";
import HomePageComponent from "../Components/HomePageComponent";

describe("Home Page Component", () => {
  const data = {
    text: "hello",
    description: "world",
  };

  test("testing for heading", () => {
    render(<HomePageComponent data={data} />);

    const element = document.querySelector("h1");
    expect(element).toHaveTextContent(data.text);
  });

  test("testing for description", () => {
    render(<HomePageComponent data={data} />);

    const element = document.querySelector("p");
    expect(element).toHaveTextContent(data.description);
  });

  test("testing for button ", () => {
    render(<HomePageComponent data={data} />);

    const element = document.querySelector("button");
    expect(element).toHaveTextContent("Order Now");
  });

  test("testing for Image", () => {
    render(<HomePageComponent data={data} />);

    const element = screen.getByAltText("burger");
    expect(element).toBeInTheDocument();
  });
});
