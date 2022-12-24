
import { StyledHeader } from "./Styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MobileMenuBtn from "./MobileMenuBtn";
import { useState } from "react";
import ProductNav from "./ProductNav";
import Nav from "./Nav"
import AppContext from "./Context/AppContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  const { handleContentDisabled} = useContext(AppContext)
  const [navActive, setNavActive] = useState(false);

  const handleNavActive = () => {
    setNavActive(!navActive);
    handleContentDisabled()
  };

  
  return (
    <StyledHeader>
      <div className="content">
        <MobileMenuBtn
          handleNavActive={handleNavActive}
          navActive={navActive}
        />
        <div className="logo">
          <Link to="/">
          <img src="/assets/shared/desktop/logo.svg" alt="audiophile-logo" />
          </Link>
        </div>
        <Nav />

        <ProductNav mobileNav={true} navActive={navActive}/>
        <button>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
