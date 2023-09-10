import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((reponse) => {
  //       setProducts(reponse.data);
  //     });
  // }, []);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  // console.log(data);
  // console.log(error);
  // console.log(isLoading);
  return (
    <>
      <ProductView products={isLoading ? [] : data.data} />
    </>
  );
};

export default ProductPage;
