import PreviousPage from "./PreviousPage";
import { StyledProductDetail } from "./Styles/ProductDetail.styled";
import { useParams } from "react-router-dom";
import ProductData from "../products.json";
import { useState, useEffect } from "react";
import QuantityBtn from "../Components/QuantityBtn";
import PrimaryBtn from "./PrimaryBtn";
import ProductNav from "./ProductNav";
import AboutCard from "./AboutCard";

const ProductDetail = () => {
  let { name } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const productDetail = products.filter((product) => product.slug === name);

  return (
    <>
      <StyledProductDetail>
        <PreviousPage />

        {productDetail.map((product, index) => (
          <section key={index}>
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
                  {product.includedItems.map((item, index) => (
                    <li key={index}>
                      <p className="itb-qty">{item.quantity}x</p>
                      <p className="item-item">{item.item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <div className="detail-grid-images">
              {Object.keys(product.gallery).map((image, index) => (
                <div
                  style={{
                    backgroundImage: `url(/${product.gallery[image].desktop})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
              ))}
            </div>
            <h4 className="related-products-title">You may also like</h4>
            <div className="related-products">
              {product.others.map((product) => (
                <article>
                  <img
                    src={`/${product.image.desktop}`}
                    alt=""
                    width="350px"
                    height="317px"
                  />
                  <h4>{product.name}</h4>
                  <PrimaryBtn
                    text="SEE PRODUCT"
                    version="main"
                    path={product.slug}
                  />
                </article>
              ))}
            </div>
          </section>
        ))}
      </StyledProductDetail>
      <ProductNav />
      <AboutCard />
    </>
  );
};

export default ProductDetail;
