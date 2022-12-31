import { StyledProductNav } from "./Styles/ProductNav.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductNav = ({ mobileNav, navActive }) => {
  return (
    <StyledProductNav mobileNav={mobileNav} navActive={navActive}>
      <ul>
        <li>
          <Link to="/headphones">
            <img
              src="/assets/shared/desktop/image-headphones.png"
              alt="heaphones-link"
            />
            <p className="nav-link">HEADPHONES</p>
            <p className="nav-link-shop">
              <span>SHOP</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </Link>
        </li>
        <li>
          <Link to="/speakers">
            <img
              src="/assets/shared/desktop/image-speakers.png"
              alt="speakers-link"
            />
            <p className="nav-link">SPEAKERS</p>
            <p className="nav-link-shop">
              <span>SHOP</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </Link>
        </li>
        <li>
          <Link to="/earphones">
            <img
              src="/assets/shared/desktop/image-earphones.png"
              alt="earphones-link"
            />
            <p className="nav-link">EARPHONES</p>
            <p className="nav-link-shop">
              <span>SHOP</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </Link>
        </li>
      </ul>
    </StyledProductNav>
  );
};

export default ProductNav;
