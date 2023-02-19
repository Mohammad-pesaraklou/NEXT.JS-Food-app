import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">ATEFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
