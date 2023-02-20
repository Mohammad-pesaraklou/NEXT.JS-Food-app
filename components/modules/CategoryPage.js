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
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select value={query.time} name="time" onChange={changeHandler}>
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <select value={query.cuisine} name="cuisine" onChange={changeHandler}>
            <option value="">Cuisine</option>
            <option value="Malaysian">Malaysian</option>
            <option value="British">British</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
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
