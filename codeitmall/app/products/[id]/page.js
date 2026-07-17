import ProductInfo from "./components/ProductInfo";
import SizeReviewList from "./components/SizeReviewList";
import {getProduct, getSizeReviews} from "@/lib/data";

const Product = async ({params}) => {
  const {id} = await params;
  const [product, {results: sizeReviews}] = await Promise.all([
    getProduct(id),
    getSizeReviews(id),
  ]);

  return (
    <div>
      <ProductInfo product={product} />
      {sizeReviews?.length > 0 && <SizeReviewList sizeReviews={sizeReviews} />}
    </div>
  );
};

export default Product;
