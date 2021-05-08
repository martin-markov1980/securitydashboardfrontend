import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>security dashboard</span>
      </div>
      <div className="cta d-flex align-items-center">
        <Link to={'/'}>ALL PROJECTS</Link>
      </div>
    </div>
  );
}

export default Navbar;