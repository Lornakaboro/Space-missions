import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const NavBar = () => (
  <div className="navbar">
    <img src={logo} alt="Space Traveler's Hub logo" />
    <span className="nav-brand">Space Traveler&apos;s Hub</span>
    <div className="nav-links">
      <NavLink
        to="/rockets"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: isActive ? '#00d7c6' : 'RGB(246, 141, 54)',
        })}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/missions"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: isActive ? '#00d7c6' : 'RGB(246, 141, 54)',
        })}
      >
        Missions
      </NavLink>
      <NavLink
        to="profile"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
          color: isActive ? '#00d7c6' : 'RGB(246, 141, 54)',
        })}
      >
        My Profile
      </NavLink>
    </div>
  </div>
);

export default NavBar;
