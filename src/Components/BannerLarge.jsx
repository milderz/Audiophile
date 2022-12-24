import PrimaryBtn from "./PrimaryBtn"
import { StyledBannerLarge } from "./Styles/BannerLarge.styled"


const BannerLarge = () => {
  return (
    <StyledBannerLarge>
      <div className="image-container">
        <img src="/assets/home/desktop/image-speaker-zx9.png" alt="stein-speaker"  />
      </div>
      <div className="description">
        <h2>ZX9 Speaker</h2>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <PrimaryBtn text="SEE PRODUCT" version="black"/>
      </div>
      
    </StyledBannerLarge>
  )
}

export default BannerLarge
