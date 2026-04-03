import {getProducts} from "@/app/lib/data";
import ProductList from "../components/ProductList";

const Search = async ({searchParams}) => {
  const {q} = await searchParams;
  const {results: products} = await getProducts(q);
  return (
    <div>
      <div>검색어: {q}</div>
      <ProductList products={products} />
    </div>
  );
};

export default Search;
