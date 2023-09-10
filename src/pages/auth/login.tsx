import styles from "./Login.module.css";
import Link from "next/link";
const LoginPage = () => {
  return (
    <>
      <section className={styles.login}>
        <div>
          <h1>Login Page</h1>
          <p>Login</p>
          <button>Login</button>
          <br />
          <br />
          <br />
          <p>Sign Up in there </p>
          <Link href="/auth/register">
            <button>Sign Up</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
