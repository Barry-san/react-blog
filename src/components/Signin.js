// import { app } from "../firebaseConfig";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (event) => {
    let input = event.target.value;
    setEmail(input);
  };

  const handleInput2 = (event) => {
    let input = event.target.value;
    setPassword(input);
  };

  const auth = getAuth();
  const handleClick = () => {
    if (password.length < 6) {
      alert("password must have at least 6 characters");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="image"></div>
      <div className="login-form">
        <div className="group">
          <label>Email:</label>
          <input
            type="text"
            // placeholder="email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <div className="group">
          <label>Password:</label>
          <input
            type="password"
            // placeholder="password"
            value={password}
            onChange={handleInput2}
          />
        </div>
        <button onClick={handleClick} className="login-btn">
          login
        </button>
      </div>
    </div>
  );
};

export default SingIn;
