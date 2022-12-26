import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BannerLarge from "./Components/BannerLarge";
import BannerSmall from "./Components/BannerSmall";
import BannerSmallTwoCol from "./Components/BannerSmallTwoCol";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainHero from "./Components/MainHero";
import ProductNav from "./Components/ProductNav";
import AboutCard from "./Components/AboutCard";
import { GlobalStyles } from "./Components/Styles/GlobalStyles";
import { useEffect, useState } from "react";
import { AppContextProvider } from "./Components/Context/AppContext";
import ProductHero from "./Components/ProductHero";
import ProductCard from "./Components/ProductCard";
import ProductData from "./products.json";
import ProductDetail from "./Components/ProductDetail";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const [products, setProducts] = useState([]);

  const headPhones = products.filter(
    (product) => product.category === "headphones"
  );
  headPhones.sort((a, b) => Number(b.new) - Number(a.new));

  const speakers = products.filter(
    (product) => product.category === "speakers"
  );
  speakers.sort((a, b) => Number(b.new) - Number(a.new));
  const earphones = products.filter(
    (product) => product.category === "earphones"
  );
  earphones.sort((a, b) => Number(b.new) - Number(a.new));

  useEffect(() => {
    setProducts(ProductData);
  }, []);
  return (
    <AppContextProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <GlobalStyles />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainHero products={products} />
                  <ProductNav />
                  <BannerLarge products={products} />
                  <BannerSmall products={products} />
                  <BannerSmallTwoCol products={products} />
                  <AboutCard />
                </>
              }
            />
            <Route
              path="/headphones"
              element={
                <>
                  <ProductHero title="headphones" />
                  <div className="product-wrapper">
                    {headPhones.map((product) =>
                      product ? (
                        <ProductCard
                          key={product.id}
                          title={product.name}
                          description={product.description}
                          newProduct={product.new}
                          image={product.image.desktop}
                          slug={product.slug}
                          category={product.category}
                        />
                      ) : null
                    )}
                  </div>
                  <ProductNav />
                  <AboutCard />
                </>
              }
            />
            <Route
              path="/speakers"
              element={
                <>
                  <ProductHero title="speakers" />
                  <div className="product-wrapper">
                    {speakers.map((product) =>
                      product ? (
                        <ProductCard
                          key={product.id}
                          title={product.name}
                          description={product.description}
                          newProduct={product.new}
                          image={product.image.desktop}
                          slug={product.slug}
                          category={product.category}
                        />
                      ) : null
                    )}
                  </div>
                  <ProductNav />
                  <AboutCard />
                </>
              }
            />
            <Route
              path="/earphones"
              element={
                <>
                  <ProductHero title="earphones" />
                  <div className="product-wrapper">
                    {earphones.map((product) =>
                      product ? (
                        <ProductCard
                          key={product.id}
                          title={product.name}
                          description={product.description}
                          newProduct={product.new}
                          image={product.image.desktop}
                          slug={product.slug}
                          category={product.category}
                        />
                      ) : null
                    )}
                  </div>
                  <ProductNav />
                  <AboutCard />
                </>
              }
            />
            <Route path="/checkout" />
            <Route
              path="/:name/:name"
              element={
                <>
                  <ProductDetail />
                </>
              }
            />
          </Routes>

          <Footer />
        </div>
      </Router>
    </AppContextProvider>
  );
};

export default App;
