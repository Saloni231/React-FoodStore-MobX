import { observer } from "mobx-react";
import HomePageComponent from "../Components/HomePageComponent";
import { useLoaderData } from "react-router-dom";

const HomePage = observer(() => {

  const data = useLoaderData();

  return (
    <>
      <HomePageComponent data={data[0]} />
    </>
  );
});

export default HomePage;

export async function loadHomePage() {
  const response = await fetch("http://localhost:3002/home");

    if(!response.ok) {}
    else {
        const data = await response.json();
        return data;
    }
}