import logo from './assets/img/logo.png';

const Navbar = () => {
  return ( 
    <div className="d-flex flex-wrap justify-content-between">
      <div className="logo">
        <img src={logo} alt="Logo"/>
        <span>security dashboard</span>
      </div>
      <div className="cta d-flex align-items-center">
        <a href="#">ALL PROJECTS</a>
      </div>
    </div>
    
   );
}
 
export default Navbar;