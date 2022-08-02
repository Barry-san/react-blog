import { useState } from "react";
const Article = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laborum dolorem, odio nesciunt commodi distinctio beatae repellendus culpa repellat architecto! Voluptas explicabo ea quos facere asperiores reiciendis, consectetur alias eligendi?",
      author: "Mario",
      id: 1,
    },
    {
      title: "Welcome Party!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laborum dolorem, odio nesciunt commodi distinctio beatae repellendus culpa repellat architecto! Voluptas explicabo ea quos facere asperiores reiciendis, consectetur alias eligendi?",
      author: "Yoshi",
      id: 2,
    },
    {
      title: "Web Dev Top Tips",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laborum dolorem, odio nesciunt commodi distinctio beatae repellendus culpa repellat architecto! Voluptas explicabo ea quos facere asperiores reiciendis, consectetur alias eligendi?",
      author: "Kishi",
      id: 3,
    },
  ]);

  return (
  <div className="Article">
    {blogs.map((blog)=> (
      <div className="preview" key={blog.id}>
        <h2>{ blog.title}</h2>
        <p>
          written by {blog.author}
        </p>
      </div>
    ))}
    </div>
  );
}
export default Article;
