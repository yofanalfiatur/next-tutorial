import styles from "@/styles/404.module.scss";
const ErrorPage = () => {
  return (
    <section className={styles.error}>
      <div>
        <p>error page 404</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum
          saepe consectetur?
        </p>
      </div>
    </section>
  );
};
export default ErrorPage;
