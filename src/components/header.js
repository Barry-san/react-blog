import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Header = () => {
  const auth = getAuth();
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>FEEL</h1>
      </Link>
      {!auth.currentUser && (
        <div className="links">
          <Link to={"/register"}> Register</Link>
          <Link to={"/signin"}>Login</Link>
        </div>
      )}

      {auth.currentUser && (
        <div className="links">
          <Link to={"/create"}> New Blog</Link>
          <Link to={"/"}>Log out</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
