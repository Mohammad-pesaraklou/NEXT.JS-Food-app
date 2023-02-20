import CategoryPage from "@/components/modules/CategoryPage";
import axios from "axios";
import React from "react";

const Category = ({ filteredData }) => {
  return (
    <div>
      <CategoryPage data={filteredData} />
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time, cuisine },
  } = context;

  const { data } = await axios(`${process.env.BASE_URL}`);

  const filteredValue = data.filter((item) => {
    const difficultyFiltered = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const cuisineFiltered = item.details.filter(
      (detail) => detail.Cuisine && detail.Cuisine === cuisine
    );

    const timeFiltered = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeCooking] = cookingTime.split(" ");
      if (time === "less" && +timeCooking <= 30) {
        return detail;
      } else if (time === "more" && +timeCooking > 30) {
        return detail;
      }
    });

    if (
      time &&
      difficulty &&
      cuisine &&
      timeFiltered.length &&
      difficultyFiltered &&
      cuisineFiltered.length
    ) {
      return item;
    } else if (
      !cuisine &&
      difficulty &&
      time &&
      timeFiltered.length &&
      difficultyFiltered
    ) {
      return item;
    } else if (
      !difficulty &&
      time &&
      cuisine &&
      timeFiltered.length &&
      cuisineFiltered.length
    ) {
      return item;
    } else if (
      !time &&
      difficulty &&
      cuisine &&
      cuisineFiltered.length &&
      difficultyFiltered.length
    ) {
      return item;
    } else if (!cuisine && !time && difficulty && difficultyFiltered.length) {
      return item;
    } else if (!time && !difficulty && cuisine && cuisineFiltered.length) {
      return item;
    } else if (!difficulty && !cuisine && time && timeFiltered.length) {
      return item;
    }
  });
  return {
    props: { filteredData: filteredValue },
  };
}
