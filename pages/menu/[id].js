import DetailsPage from "@/components/modules/DetailsPage";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const FoodDetails = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <DetailsPage {...data} />
    </div>
  );
};
// export async function getStaticPaths() {
//   const req = await axios("https:/localhost:4000/data");
//   const paths = req.data.map((item) => ({
//     params: { id: item.id.toString() },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const req = await axios(`http://localhost:4000/data/${params.id}`);
//   return {
//     props: {
//       data: req.data,
//     },
//   };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const req = await axios(`${process.env.BASE_URL}/${params.id}`);
  return {
    props: {
      data: req.data,
    },
  };
}
export default FoodDetails;
