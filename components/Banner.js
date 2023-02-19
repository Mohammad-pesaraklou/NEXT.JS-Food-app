import Link from "next/link";
import styles from "./template/Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>ATEFood</h2>
        <p>Food Delivery and Takeout!</p>
        <span>
          ATEFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <br />
        <button className={styles.btn}>
          <Link href="/menu">See All</Link>
        </button>
      </div>
      <div className={styles.right}>
        <img
          src="/images/banner.png"
          className={styles.image}
          alt="Food image"
        />
      </div>
    </div>
  );
};

export default Banner;
