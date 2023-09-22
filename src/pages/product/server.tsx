import ProductView from "@/views/Product";
import { ProductType } from "@/types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <>
      <ProductView products={products} />
    </>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();
  return {
    props: {
      products: response.data,
    },
  };
}
