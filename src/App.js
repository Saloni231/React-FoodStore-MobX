import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, {loadHomePage} from "./Pages/HomePage";
import AboutPage, {loadAboutPage} from "./Pages/AboutPage";
import RecipePage, {loadRecipes} from "./Pages/RecipePage";
import BlogPage, {loadBlogPage} from "./Pages/BlogPage";
import ContactUsPage from "./Pages/ContactUs";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

import Layout, {loadHeader} from "./Pages/MainLayout";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: loadHeader,
      children: [
        { index: true, element: <HomePage />, loader: loadHomePage },
        { path: "about", element: <AboutPage />, loader: loadAboutPage },
        { path: "recipes", element: <RecipePage />, loader: loadRecipes },
        { path: "blog", element: <BlogPage />, loader: loadBlogPage },
        { path: "contactus", element: <ContactUsPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
