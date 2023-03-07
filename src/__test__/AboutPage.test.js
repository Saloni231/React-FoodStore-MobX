import { render, screen } from "@testing-library/react";
import AboutPageComponent from "../Components/AboutPageComponent";

describe("About Page Component", () => {
  const data = [
    {
      aboutDescription: "about",
      detailHeader: "food",
      detail: "best food",
      detailURL: "/about",
      image: "image.png",
    },
  ];

  test("testing plate image", () => {
    render(<AboutPageComponent data={data[0]} />);

    const element = document.querySelector("img");
    expect(element.alt).toContain("plate");
  });

  test("testing about description ", () => {
    render(<AboutPageComponent data={data[0]} />);

    const element = screen.getByText(data[0].aboutDescription);
    expect(element).toBeInTheDocument();
  });

  test("testing detail Header ", () => {
    render(<AboutPageComponent data={data[0]} />);

    const element = document.querySelector("h2");
    expect(element.textContent).toMatch(data[0].detailHeader);
  });

  test("testing detail ", () => {
    render(<AboutPageComponent data={data[0]} />);

    const element = screen.getByText(data[0].detail);
    expect(element).toBeInTheDocument();
  });

  test("testing about description ", () => {
    render(<AboutPageComponent data={data[0]} />);

    const element = document.querySelector("a");
    expect(element.href).toContain(data[0].detailURL);
  });

  test("testing about description ", () => {
    render(<AboutPageComponent data={data[0]} />);

    const element = screen.getByAltText("about");
    expect(element.src).toContain(data[0].image);
  });
});
