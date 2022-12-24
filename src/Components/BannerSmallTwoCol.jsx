import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import { StyledBannerSmallTwoCol } from './Styles/BannerSmallTwoCol.styled'

const BannerSmallTwoCol = () => {
  return (
    <StyledBannerSmallTwoCol>
     <div className="image"></div>
     <div className="text-content">
      <h4>YX1 Earphones</h4>
      <PrimaryBtn text="SEE PRODUCT" version="outline"/>
     </div>
      
    </StyledBannerSmallTwoCol>
  )
}

export default BannerSmallTwoCol
