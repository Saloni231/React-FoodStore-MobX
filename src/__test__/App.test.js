import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import HomePage from "../Pages/HomePage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import RecipePage from "../Pages/RecipePage";
import BlogPage from "../Pages/BlogPage";
import ContactUsPage from "../Pages/ContactUs";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ErrorPage from "../Pages/ErrorPage";
import "jest-fix-undefined";
import { act } from "react-test-renderer";

describe("testing Navigation", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("app component", async () => {
    await act(async() => {
      await waitFor(() =>  render(<App />, container));
    });

    expect(screen).toBeDefined();
  });

  it("root route", async () => {
    const data = [{ text: "hello", description: "world" }];
    const route = [
      {
        path: "/",
        element: <HomePage />,
        loader: () => data,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", ""],
    });

    act(() => {
      render(<RouterProvider router={router} />, container);
    });

    await screen.findByText(data[0].text);
    expect(screen.getByText(data[0].text)).toBeInTheDocument();
  });

  it("about route", async () => {
    const data = [
      {
        aboutDescription: "about",
        detailHeader: "food",
        detail: "best food",
        detailURL: "/about",
        image: "image.png",
      },
    ];
    const route = [
      {
        path: "/about",
        element: <AboutPage />,
        loader: () => data,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/about"],
    });

    act(() => {
      render(<RouterProvider router={router} />, container);
    });

    await screen.findByText(data[0].detail);
    expect(screen.getByText(data[0].detail)).toBeInTheDocument();
  });

  it("recipes route", async () => {
    const recipes = [{ id: 1, name: "food", price: 10, image: "image.png" }];
    const route = [
      {
        path: "/recipes",
        element: <RecipePage />,
        loader: () => recipes,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/recipes"],
    });

    act(() => {
      render(<RouterProvider router={router} />, container);
    });

    await screen.findByText(recipes[0].name);
    expect(screen.getByText(recipes[0].name)).toBeInTheDocument();
  });

  it("blog route", async () => {
    const data = [
      {
        id: 1,
        title: "food",
        date: "6-March-2023",
        description: "good",
        image: "image.png",
      },
    ];
    const route = [
      {
        path: "/blog",
        element: <BlogPage />,
        loader: () => data,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/blog"],
    });

    act(() => {
      render(<RouterProvider router={router} />);
    });

    await screen.findByText(data[0].title);
    expect(screen.getByText(data[0].title)).toBeInTheDocument();
  });

  it("contact us route", async () => {
    const route = [
      {
        path: "/contactus",
        element: <ContactUsPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/contactus"],
    });

    act(() => {
      render(<RouterProvider router={router} />, container);
    });

    await screen.findByText("Email");
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("login route", async () => {
    const route = [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/login"],
    });

    act(() => {
      render(<RouterProvider router={router} />, container);
    });

    await screen.findByText("Email");
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("register route", async () => {
    const route = [
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/register"],
    });

    act(() => {
      render(<RouterProvider router={router} />, container);
    });

    await screen.findByText("Email");
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("not found route", async () => {
    const route = [
      {
        errorElement: <ErrorPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/home"],
    });

    act(() => {
      render(<RouterProvider router={router} />, container);
    });

    await screen.findByText("Not found!");
    expect(screen.getByText("Not found!")).toBeInTheDocument();
  });
});
