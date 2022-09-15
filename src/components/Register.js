import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const handleClick = () => {
    console.log(auth);
    console.log(email);
    console.log(password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleInput = (event) => {
    let input = event.target.value;
    setEmail(input);
  };
  const handleInput2 = (event) => {
    let input = event.target.value;
    setPassword(input);
  };
  return (
    <div className="register">
      <input
        type="text"
        placeholder="email"
        value={email}
        required
        onChange={(e) => handleInput(e)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => handleInput2(e)}
      />
      <button onClick={handleClick}>register</button>
    </div>
  );
};

export default Register;
