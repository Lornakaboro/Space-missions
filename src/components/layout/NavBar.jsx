import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const NavBar = () => (
  <div className="navbar">
    <img src={logo} alt="Space Traveler's Hub logo" />
    <span className="nav-brand">Space Traveler&apos;s Hub</span>
    <div className="nav-links">
      <NavLink to="/rockets">Rockets</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="profile">My Profile</NavLink>
    </div>
  </div>
);

export default NavBar;
