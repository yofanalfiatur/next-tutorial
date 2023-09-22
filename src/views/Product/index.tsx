/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types/product.type";
import styles from "./Product.module.scss";
import Link from "next/link";

const ProductView = ({ products }: { products: ProductType[] }) => {
  return (
    <>
      <section>
        <div>
          <h1>Product Landing Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            tenetur?
          </p>
        </div>
        <br />
        <br />
        <div className={styles.wrapper}>
          {products.length > 0 ? (
            <>
              {products.map((products: ProductType) => (
                <Link
                  href={`/product/${products.id}`}
                  key={products.id}
                  className={styles.product}
                >
                  <img
                    src={products.image}
                    alt="product-image"
                    className={styles.product__image}
                  />
                  <h4 className={styles.product__title}>{products.name}</h4>
                  <p className={styles.product__price}>
                    {products.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                  <p className={styles.product__size}>size : {products.size}</p>
                </Link>
              ))}
            </>
          ) : (
            <>
              <div className={styles.product__frame}>
                <div className={styles.product__frame__image} />
                <h4 className={styles.product__frame__title}></h4>
                <p className={styles.product__frame__price}></p>
                <p className={styles.product__frame__size}></p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductView;
