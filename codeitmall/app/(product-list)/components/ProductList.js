import Link from "next/link";

const ProductList = () => {
  return (
    <ul>
      {Array.from({length: 20}, (_, i) => i + 1).map((id) => (
        <li key={id} style={{marginBottom: "40px"}}>
          <Link href={`/products/${id}`}>
            <div>상품 {id}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
