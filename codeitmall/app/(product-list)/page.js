import {getProducts} from "../lib/data";
import ProductList from "./components/ProductList";

const Home = async () => {
  const {results: products} = await getProducts();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
