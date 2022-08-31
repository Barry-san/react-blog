import React from "react";

const Bloglist = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="Bloglist">
      {blogs.map((blog) => (
        <div className="preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
