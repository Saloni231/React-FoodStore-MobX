import { render, screen } from "@testing-library/react";
import BlogPageComponent from "../Components/BlogPageComponent";

describe("Blog Page Component", () => {
  const data = [
    {
      id: 1,
      title: "food",
      date: "6-March-2023",
      description: "good",
      image: "image.png",
    },
  ];

  test("testing plate image", () => {
    render(<BlogPageComponent data={data} />);

    const element = document.querySelector("img");
    expect(element.alt).toContain("plate");
  });

  test("testing description ", () => {
    render(<BlogPageComponent data={data} />);

    const element = screen.getByText(
      /Food Store Is The Only Online Supermarket You Need. Daily Needs Delivered To Your Home Faster Than Supermarkets, Only On Food Store./i
    );
    expect(element).toBeInTheDocument();
  });

  test("testing date", () => {
    render(<BlogPageComponent data={data} />);

    const element = screen.getByText(data[0].date);
    expect(element).toBeInTheDocument();
  });

  test("testing blog image ", () => {
    render(<BlogPageComponent data={data} />);

    const element = screen.getByAltText(data[0].title);
    expect(element.src).toContain(data[0].image);
  });

  test("testing about description ", () => {
    render(<BlogPageComponent data={data} />);

    const element = document.querySelector("h4");
    expect(element.textContent).toContain(data[0].title);
  });

  test("testing about description ", () => {
    render(<BlogPageComponent data={data} />);

    const element = screen.getByText(data[0].description);
    expect(element).toBeInTheDocument();
  });
});
