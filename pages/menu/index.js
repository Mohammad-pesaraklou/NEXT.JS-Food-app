import MenuPage from "@/components/modules/MenuPage";
import axios from "axios";
import React from "react";

const Foods = ({ foods }) => {
  return (
    <div>
      <MenuPage data={foods} />
    </div>
  );
};

export default Foods;

export async function getStaticProps() {
  const req = await axios(`${process.env.BASE_URL}`);
  return {
    props: {
      foods: req.data,
      revalidate: +process.env.REVALIDATE_NUMBER,
    },
  };
}
