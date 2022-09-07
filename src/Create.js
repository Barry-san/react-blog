import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebaseConfig";

const Create = () => {
  const db = getFirestore(firebaseApp);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author: "Yoshi" };
    console.log(db.collection("blogs"));
    db.collection("blogs")
      .add(blog)
      .then((ref) => console.log("document reference is : " + ref.id));
    console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blog Title</label>
          <input
            placeholder="Enter the blog title here."
            type="text"
            required
            value={title}
            onChange={(e) => {
              if (e.target.value.length < 200) {
                setTitle(e.target.value);
              }
            }}
          ></input>
        </div>
        <div className="form-group">
          <label>Blog Content</label>
          <textarea
            name="content"
            cols="70"
            rows="10"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
