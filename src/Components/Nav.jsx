import { StyledNav } from "./Styles/Nav.styled";
import { NavLink } from 'react-router-dom'


const Nav = ({ navActive }) => {

  let activeStyle = {
    color: "var(--peach)",
  };

  return (
    <StyledNav navActive={navActive}>
      <ul className="desktop-nav">
        <li>
          <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>HOME</NavLink>
        </li>
        <li>
          <NavLink to="/headphones" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>HEADPHONES</NavLink>
        </li>
        <li>
          <NavLink to="/speakers" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>SPEAKERS</NavLink>
        </li>
        <li>
          <NavLink to="/earphones" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>EARPHONES</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
