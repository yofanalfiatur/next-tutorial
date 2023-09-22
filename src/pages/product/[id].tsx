import { fetcher } from "@/lib/swr/fetcher";
import DetailProducts from "@/views/DetailProducts";
import { useRouter } from "next/router";
import useSWR from "swr";
const DetailProduct = () => {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(`api/product/${query.id}`, fetcher);

  return (
    <>
      <section>
        <div>
          <h3>Detail Product </h3>
          {/* id ditulis sama dengan nama file --> [id].tsx */}
          <DetailProducts product={isLoading ? [] : data.data} />
        </div>
      </section>
    </>
  );
};

export default DetailProduct;
