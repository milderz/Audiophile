import PrimaryBtn from "./PrimaryBtn"
import { StyledProductCard } from "./Styles/ProductCard.styled"


const ProductCard = ({title, description, newProduct, image, category, slug}) => {
 console.log(slug);
  return (
    <StyledProductCard image={image}>
      <div className="content">
       <div className="img-content">
        
       </div>
       <div className="text-content">
        {newProduct && (<p className="headline">NEW PRODUCT</p>) }
        
        <h4>{title}</h4>
        <p>{description}</p>
        <PrimaryBtn text="SEE PRODUCT" version="main" path={slug} category={category}/>
       </div>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard
