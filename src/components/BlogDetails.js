import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  console.log(id);
  return (
    <div className="details">
      {error && error}
      {isPending && <p> loading</p>}
      {data && <h2 className="bog-title"> {data.title}</h2>}
      {data && <p>Written by {data.author}</p>}
      {data && (
        <div className="blog-content">
          {" "}
          <pre>{data.content}</pre>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
