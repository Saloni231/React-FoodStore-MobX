import { useLoaderData } from "react-router-dom";
import BlogPageComponent from "../Components/BlogPageComponent";

const BlogPage = () => {
  const data = useLoaderData();

  return <BlogPageComponent data={data} />;
};

export default BlogPage;

export async function loadBlogPage() {
  const response = await fetch("http://localhost:3002/blog");

  if (!response.ok) {
  } else {
    const data = await response.json();
    return data;
  }
}
