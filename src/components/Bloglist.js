import React from "react";
import { Link } from "react-router-dom";

const Bloglist = (props) => {
  const blogs = props.blogs;

  return (
    <div className="Bloglist">
      {blogs.map((blog) => (
        <div className="preview" key={blog.id}>
          <Link to={`blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            <p>{blog.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
