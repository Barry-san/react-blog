import { useState } from "react";
import { useEffect } from "react";
import Bloglist from "./Bloglist";
const Article = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="Article">
      {blogs && <Bloglist blogs={blogs} title="all blogs" />}
    </div>
  );
};
export default Article;
