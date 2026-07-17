import ProductList from "./components/ProductList";
import {getInitialProducts} from "@/lib/data";

const Home = async () => {
  const {results: products, next} = await getInitialProducts();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
