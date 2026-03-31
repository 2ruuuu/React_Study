import Button from "@/components/Button";
import ProductInfo from "./components/ProductInfo";

const Product = async ({params}) => {
  const {id} = await params;

  return (
    <div>
      <ProductInfo />
      <Button>구매하기</Button>
      <div>{id}</div>
    </div>
  );
};

export default Product;
