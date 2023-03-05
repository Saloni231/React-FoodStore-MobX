import { useLoaderData } from "react-router-dom";
import AboutPageComponent from "../Components/AboutPageComponent";

const AboutPage = () => {
  const data = useLoaderData();

  return <AboutPageComponent data={data[0]} />;
};

export default AboutPage;

export async function loadAboutPage() {
  const response = await fetch("http://localhost:3002/about");

  if (!response.ok) {
  } else {
    const data = await response.json();
    return data;
  }
}
