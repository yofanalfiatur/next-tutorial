import { useRouter } from "next/router";
const DetailProduct = () => {
  const { query } = useRouter();
  return (
    <>
      <section>
        <div>
          <h3>Detail Product </h3>
          {/* id ditulis sama dengan nama file --> [id].tsx */}
          <p>Prodcut ini : {query.id}</p>
        </div>
      </section>
    </>
  );
};

export default DetailProduct;
