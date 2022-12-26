import PrimaryBtn from "./PrimaryBtn";
import { StyledBannerLarge } from "./Styles/BannerLarge.styled";

const BannerLarge = ({ products }) => {
  const ZX9Speaker = products.filter(
    (product) => product.name === "ZX9 Speaker"
  );

  return (
    <StyledBannerLarge>
      <div className="image-container">
        <img
          src="/assets/home/desktop/image-speaker-zx9.png"
          alt="stein-speaker"
        />
      </div>
      <div className="description">
        <h2>ZX9 Speaker</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <PrimaryBtn
          text="SEE PRODUCT"
          version="black"
          category={ZX9Speaker[0]?.category}
          path={ZX9Speaker[0]?.slug}
        />
      </div>
    </StyledBannerLarge>
  );
};

export default BannerLarge;
