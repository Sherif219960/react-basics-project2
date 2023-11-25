import ProductCard from "./components/ProductCard";
import { ProductList } from "./data";
import { Fragment } from "react";
const App = () => {
  // render productList

  const RenderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {RenderProductList}
      </div>
    </div>
  );
};

export default App;
