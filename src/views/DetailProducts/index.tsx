import { ProductType } from "@/types/product.type";
import styles from "./DetailProducts.module.scss";

const DetailProducts = ({ product }: { product: ProductType }) => {
  return (
    <div className={styles.product}>
      <img
        src={product.image}
        alt="product-image"
        className={styles.product__image}
      />
      <h4 className={styles.product__title}>{product.name}</h4>
      <p className={styles.product__price}>
        {product.price &&
          product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
      </p>
      <p className={styles.product__size}>size : {product.size}</p>
    </div>
  );
};

export default DetailProducts;
