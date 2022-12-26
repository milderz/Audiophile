import PreviousPage from "./PreviousPage";
// import ProductDetailCard from "./ProductDetailCard";
import { StyledProductDetail } from "./Styles/ProductDetail.styled";
import { useParams } from "react-router-dom";
import ProductData from "../products.json";
import { useState, useEffect } from "react";
import QuantityBtn from "../Components/QuantityBtn";
import PrimaryBtn from "./PrimaryBtn";

const ProductDetail = () => {
  let { name } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const productDetail = products.filter((product) => product.slug === name);

  return (
    <StyledProductDetail>
      <PreviousPage />

      {productDetail.map((product) => (
        <>
          <article className="product-detail-card">
            <div
              className="img-content"
              style={{
                background: `url('/${product.image.desktop}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="text-content">
              {product.new && <p className="headline">NEW PRODUCT</p>}
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{`$${product.price}`}</p>
              <div className="btn-wrapper">
                <QuantityBtn />
                <PrimaryBtn version="main" text="ADD TO CART" />
              </div>
            </div>
          </article>
          <section className="detail-page-features">
            <div className="features">
              <h4>FEATURES</h4>
              <p>{product.features}</p>
            </div>
            <div className="in-the-box">
              <h4>IN THE BOX</h4>
              <ul>
                {product.includedItems.map((item) => (
                  <>
                    <li>
                      <p className="itb-qty">{item.quantity}x</p>
                      <p className="item-item">{item.item}</p>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </section>
        </>
      ))}
    </StyledProductDetail>
  );
};

export default ProductDetail;
