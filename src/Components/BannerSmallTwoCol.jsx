import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import { StyledBannerSmallTwoCol } from "./Styles/BannerSmallTwoCol.styled";

const BannerSmallTwoCol = ({ products }) => {
  const YX1Earphones = products.filter(
    (product) => product.name === "YX1 Wireless Earphones"
  );

  console.log(YX1Earphones);
  return (
    <StyledBannerSmallTwoCol>
      <div className="image"></div>
      <div className="text-content">
        <h4>YX1 Earphones</h4>
        <PrimaryBtn
          text="SEE PRODUCT"
          version="outline"
          category={YX1Earphones[0]?.category}
          path={YX1Earphones[0]?.slug}
        />
      </div>
    </StyledBannerSmallTwoCol>
  );
};

export default BannerSmallTwoCol;
