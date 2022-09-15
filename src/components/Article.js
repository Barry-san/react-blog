import Bloglist from "./Bloglist";
import useFetch from "../hooks/useFetch";

const Article = () => {
  const { data, isPending, error } = useFetch(" http://localhost:8000/blogs");
  return (
    <div className="Article">
      {error && (
        <div>
          <br />
          <h2>{error}</h2>
        </div>
      )}
      {isPending && <div> loading...</div>}
      {data && <Bloglist blogs={data} title="all blogs" />}
    </div>
  );
};
export default Article;
