import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import PrimaryBtn from "./PrimaryBtn";
import { StyledMainHero } from "./Styles/MainHero.styled";

const MainHero = ({ products }) => {
  const { contentDisabled } = useContext(AppContext);

  const XX99MarkIIHeadphones = products.filter(
    (product) => product.name === "XX99 Mark II Headphones"
  );
  return (
    <StyledMainHero contentDisabled={contentDisabled}>
      <div className="content">
        <p className="headline">NEW PRODUCT</p>
        <h1>XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <PrimaryBtn
          text="SEE PRODUCT"
          version="main"
          category={XX99MarkIIHeadphones[0]?.category}
          path={XX99MarkIIHeadphones[0]?.slug}
        />
      </div>
    </StyledMainHero>
  );
};

export default MainHero;
