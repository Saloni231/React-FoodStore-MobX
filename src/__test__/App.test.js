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

test("testing Login Component", () => {
  render(<App />);
  expect(screen).toBeDefined();
});

describe("testing Navigation", () => {
  test("root route", async () => {
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

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText(data[0].text));
    expect(screen.getByText(data[0].text)).toBeInTheDocument();
  });

  test("about route", async () => {
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

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText(data[0].detail));
    expect(screen.getByText(data[0].detail)).toBeInTheDocument();
  });

  test("recipes route", async () => {
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

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText(recipes[0].name));
    expect(screen.getByText(recipes[0].name)).toBeInTheDocument();
  });

  test("blog route", async () => {
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

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText(data[0].title));
    expect(screen.getByText(data[0].title)).toBeInTheDocument();
  });

  test("contact us route", async () => {
    const route = [
      {
        path: "/contactus",
        element: <ContactUsPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/contactus"],
    });

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText("Email"));
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("login route", async () => {
    const route = [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/login"],
    });

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText("Email"));
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("about route", async () => {
    const route = [
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/register"],
    });

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText("Email"));
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("not found route", async () => {
    const route = [
      {
        errorElement: <ErrorPage />,
      },
    ];

    const router = createMemoryRouter(route, {
      initialEntries: ["/", "/home"],
    });

    render(<RouterProvider router={router} />);

    await waitFor(() => screen.getByText("Not found!"));
    expect(screen.getByText("Not found!")).toBeInTheDocument();
  });
});
