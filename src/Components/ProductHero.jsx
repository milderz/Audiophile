import { StyledProductHero } from "./Styles/ProductHero.styled"


const ProductHero = ({title}) => {
  return (
    <StyledProductHero>
      <h3>{title}</h3>
    </StyledProductHero>
  )
}

export default ProductHero
