import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import PrimaryBtn from "./PrimaryBtn";
import { StyledMainHero } from "./Styles/MainHero.styled";


const MainHero = () => {

  const { contentDisabled } = useContext(AppContext)
  return (
    <StyledMainHero contentDisabled={contentDisabled}>
      <div className="content">
      
        <p className="headline">NEW PRODUCT</p>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <PrimaryBtn text="SEE PRODUCT" version="main" />
        
      </div>
    </StyledMainHero>
  );
};

export default MainHero;
