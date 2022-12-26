import PrimaryBtn from "./PrimaryBtn";
import { StyledBannerSmall } from "./Styles/BannerSmall.styled";

const BannerSmall = () => {
  return (
    <StyledBannerSmall>
      <h4>ZX7 Speaker</h4>
      <PrimaryBtn text="SEE PRODUCT" version="outline" />
    </StyledBannerSmall>
  );
};

export default BannerSmall;
