import PrimaryBtn from "./PrimaryBtn";
import { StyledBannerSmall } from "./Styles/BannerSmall.styled";

const BannerSmall = ({ products }) => {
  const ZX7Speaker = products.filter(
    (product) => product.name === "ZX7 Speaker"
  );
  return (
    <StyledBannerSmall>
      <h4>ZX7 Speaker</h4>
      <PrimaryBtn
        text="SEE PRODUCT"
        version="outline"
        category={ZX7Speaker[0]?.category}
        path={ZX7Speaker[0]?.slug}
      />
    </StyledBannerSmall>
  );
};

export default BannerSmall;
