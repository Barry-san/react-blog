import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebaseConfig";

const Create = () => {
  const db = getFirestore(firebaseApp);
=======
// import { History } from "history";

const Create = () => {
>>>>>>> 52a8660 (added a page to creat Blogs)
=======
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebaseConfig";

const Create = () => {
  const db = getFirestore(firebaseApp);
>>>>>>> 6c856b9 (trying to commit again smh.)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
<<<<<<< HEAD
<<<<<<< HEAD
    e.preventDefault();
    const blog = { title, content, author: "Yoshi" };
    console.log(db.collection("blogs"));
    db.collection("blogs")
      .add(blog)
      .then((ref) => console.log("document reference is : " + ref.id));
    console.log(blog);
=======
    const blog = { title, content, author: "Yoshi" };
    console.log(blog);
    e.preventDefault();
>>>>>>> 52a8660 (added a page to creat Blogs)
=======
    e.preventDefault();
    const blog = { title, content, author: "Yoshi" };
    console.log(db.collection("blogs"));
    db.collection("blogs")
      .add(blog)
      .then((ref) => console.log("document reference is : " + ref.id));
    console.log(blog);
>>>>>>> 6c856b9 (trying to commit again smh.)
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
<<<<<<< HEAD
<<<<<<< HEAD
    }).then((res) => {
      console.log(res);
    });
=======
    }).then();
>>>>>>> 52a8660 (added a page to creat Blogs)
=======
    }).then((res) => {
      console.log(res);
    });
>>>>>>> 3f19df7 (updated json files and created new component.)
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
