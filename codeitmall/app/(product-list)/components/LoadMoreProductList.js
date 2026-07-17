"use client";

import {useState} from "react";
import ProductList from "./ProductList";

const LoadMoreProductList = ({initialProducts = [], initialNext = null}) => {
  const [product, setProduct] = useState(initialProducts);
  const [next, setNext] = useState(initialNext);

  const handleLoadMoer = () => {};

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
