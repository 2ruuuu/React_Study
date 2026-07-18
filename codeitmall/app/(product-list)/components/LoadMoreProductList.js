"use client";

import {useState} from "react";
import ProductList from "./ProductList";
import {get} from "@/lib/fetch";

const LoadMoreProductList = ({initialProducts = [], initialNext = null}) => {
  const [products, setProducts] = useState(initialProducts);
  const [next, setNext] = useState(initialNext);

  const handleLoadMore = async () => {
    const res = await get(next);
    console.log(res);
  };

  return (
    <div>
      <ProductList products={products} />
      {next && (
        <button style={{marginTop: "20px"}} onClick={handleLoadMore}>
          상품 더 보기
        </button>
      )}
    </div>
  );
};

export default LoadMoreProductList;
