import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useFetch("http://localhost:8000/blogs");
  console.log(id);
  return <div className="details"></div>;
};

export default BlogDetails;
