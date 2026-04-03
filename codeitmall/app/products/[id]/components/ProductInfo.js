export default function ProductInfo({product}) {
  return (
    <div>
      <img src={product.imgUrl} alt={product.name} width={660} height={700} />
      <h1>{product.name}</h1>
      <div>
        {product.brand} / {product.productCode}
      </div>
      <div>{product.salePrice}원</div>
      <div>포인트 적립 {product.point}점</div>
      <div>구매 후기 {product.starRating}</div>
      <div>좋아요 {product.likeCount}</div>
    </div>
  );
}
