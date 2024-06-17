import Link from "next/link";
import styles from "./Card.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "@/redux/counterHandler";
import { isInCard } from "@/utils/function";

function Card(props) {
  const { id, name, price, details, discount } = props;
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counterState);
  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}%</div> : null}
      </div>
      <Link className={styles.btn} href={`/menu/${id}`}>
        See Details
      </Link>

      <button
        className={styles.btn}
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(increase(props))}
      >
        increase
      </button>
      <button
        className={styles.btn}
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(decrease(props))}
      >
        decrease
      </button>
      {isInCard(counterState, id) ? (
        <button
          className={styles.btn}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(removeItem(props))}
        >
          Remove
        </button>
      ) : (
        <button
          className={styles.btn}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(addItem(props))}
        >
          Add item
        </button>
      )}
    </div>
  );
}

export default Card;
