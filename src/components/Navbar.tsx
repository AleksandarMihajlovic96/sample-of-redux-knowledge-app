import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/searchPackage">Search Package</Link>
    </div>
  );
};
export default NavBar;
