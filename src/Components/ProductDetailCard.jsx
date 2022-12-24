import PrimaryBtn from './PrimaryBtn'
import QuantityBtn from './QuantityBtn'
import { StyledProductDetailCard } from './Styles/ProductDetailCard.styled'


const ProductDetailCard = ({productDetail}) => {

 productDetail.map((pr) => console.log(pr.image.desktop))
  return (

    
    <>
     {productDetail.map((product) => product && (<StyledProductDetailCard key={product.id} imgDesktop={product.image.desktop}>
     <div  className="img-content"></div>
     <div className="text-content">
      {product.new && (<p className="headline">NEW PRODUCT</p>)}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{`$${product.price}`}</p>
      <div className="btn-wrapper">
      <QuantityBtn />
      <PrimaryBtn version="main" text="ADD TO CART"/>
      </div>
     </div></StyledProductDetailCard>))}
    </>
     
      
    
  )
}

export default ProductDetailCard
