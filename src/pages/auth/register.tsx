import Link from "next/link";
import styles from "./Login.module.css";
const RegisterPage = () => {
  return (
    <>
      <section className={styles.register}>
        <div>
          <h1>Register Page</h1>
          <p>Register</p>
          <button>Sign Up</button>
          <br />
          <br />
          <br />
          <p>already have an account</p>
          <Link href="/auth/login">
            <button>Login</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
