
import PreviousPage from './PreviousPage'
import ProductDetailCard from './ProductDetailCard'
import { StyledProductDetail } from './Styles/ProductDetail.styled'
import { useParams } from 'react-router-dom'
import ProductData from "../products.json";
import { useState, useEffect } from 'react';


const ProductDetail = () => {

 let { name } = useParams()

const [products, setProducts] = useState([]);

useEffect(() => {
    setProducts(ProductData);
  }, []);

const productDetail = products.filter((product) => product.slug === name)

  return (
    <StyledProductDetail>
      <PreviousPage />
      <ProductDetailCard productDetail={productDetail}/>
    </StyledProductDetail>
  )
}

export default ProductDetail
