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
  const req = await axios("http://localhost:4000/data");
  return {
    props: {
      foods: req.data,
      revalidate: process.env.NEXT_PUBLIC_APP_REVALIDATE_NUMBER,
    },
  };
}
