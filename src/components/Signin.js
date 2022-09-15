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
    signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <div className="login">
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={handleInput}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handleInput2}
      />
      <button onClick={handleClick}>login</button>
    </div>
  );
};

export default SingIn;
