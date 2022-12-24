import React from "react";
import { StyledMobileMenuBtn } from "./Styles/MobileMenuBtn.styled";

const MobileMenuBtn = ({ handleNavActive, navActive }) => {
  return (
    <StyledMobileMenuBtn onClick={handleNavActive}>
      <div id="hamburger-1" className={`hamburger ${navActive && "is-active"}`}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </StyledMobileMenuBtn>
  );
};

export default MobileMenuBtn;
