import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>FEEL</h1>
      </Link>
      <div className="links">
        <Link to={"/"}>Sign up</Link>
        <Link to={"/create"}> New blog</Link>
      </div>
    </div>
  );
};

export default Header;
