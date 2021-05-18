import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";

const Navbar = ({ handleLogout }) => {

  return (
    <div className="d-flex flex-wrap justify-content-between">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>security dashboard</span>
      </div>
      <div className="cta d-flex align-items-center">
        <Link to={'/securitydashboardfrontend'}>ALL PROJECTS</Link>
        <button type="button" className="btn sign-out" onClick={handleLogout}>LOG OUT</button>
      </div>
    </div>
  );

}

export default Navbar;