import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import RecipePage from "./Pages/RecipePage";
import BlogPage from "./Pages/BlogPage";
import ContactUsPage from "./Pages/ContactUs";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

import Layout from "./Pages/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "recipes", element: <RecipePage /> },
        { path: "blog", element: <BlogPage /> },
        { path: "contactus", element: <ContactUsPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
