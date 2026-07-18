import LoadMoreProductList from "./components/LoadMoreProductList";
import {getInitialProducts} from "@/lib/data";

const Home = async () => {
  const {results: products, next} = await getInitialProducts();

  return (
    <div>
      <LoadMoreProductList initialProducts={products} initialNext={next} />
    </div>
  );
};

export default Home;
