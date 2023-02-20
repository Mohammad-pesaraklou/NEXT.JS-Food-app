import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./CategoriesPage.module.css";

const CategoryPage = ({ data }) => {
  const [query, setQuery] = useState({ difficulty: "", time: "", cuisine: "" });

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  useEffect(() => {
    const { difficulty, time, cuisine } = router.query;
    if (
      query.difficulty !== difficulty ||
      query.time !== time ||
      query.cuisine !== cuisine
    ) {
      setQuery({ difficulty, time, cuisine });
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
            style={{ color: "black" }}
          >
            <option className={styles.optionItem} value="">
              Difficulty
            </option>
            <option className={styles.optionItem} value="Easy">
              Easy
            </option>
            <option className={styles.optionItem} value="Medium">
              Medium
            </option>
            <option className={styles.optionItem} value="Hard">
              Hard
            </option>
          </select>
          <select
            style={{ color: "black" }}
            value={query.time}
            name="time"
            onChange={changeHandler}
          >
            <option className={styles.optionItem} value="">
              Cooking Time
            </option>
            <option className={styles.optionItem} value="more">
              More than 30 min
            </option>
            <option className={styles.optionItem} value="less">
              Less than 30 min
            </option>
          </select>
          <select
            style={{ color: "black" }}
            value={query.cuisine}
            name="cuisine"
            onChange={changeHandler}
          >
            <option className={styles.optionItem} value="">
              Cuisine
            </option>
            <option className={styles.optionItem} value="Malaysian">
              Malaysian
            </option>
            <option className={styles.optionItem} value="British">
              British
            </option>
            <option className={styles.optionItem} value="Japanese">
              Japanese
            </option>
            <option className={styles.optionItem} value="Italian">
              Italian
            </option>
            <option className={styles.optionItem} value="Chinese">
              Chinese
            </option>
            <option className={styles.optionItem} value="American">
              American
            </option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
        <div className={styles.cards}>
          {!data.length ? (
            <img src="/images/search.png" alt="Category" />
          ) : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
