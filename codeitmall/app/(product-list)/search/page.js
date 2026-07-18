import {getInitialProducts} from "@/lib/data";
import LoadMoreProductList from "../components/LoadMoreProductList";

const Search = async ({searchParams}) => {
  const {q} = await searchParams;
  const {results: products, next} = await getInitialProducts(q);

  return (
    <div>
      <div>검색어: {q}</div>
      <LoadMoreProductList
        key={q || "all"}
        initialProducts={products}
        initialNext={next}
      />
    </div>
  );
};

export default Search;
