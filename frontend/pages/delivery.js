import Delivery from "@/components/delivery";
import React from "react";

const delivery = ({products}) => {
  return (
    <div>
      <h1>Delivery Form</h1>
      <Delivery products={products} />

      <Delivery />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // Fetch necessary data from Strapi CMS API
    const response = await fetch("http://localhost:1337/api/deliveries");
    const products = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.log("Error:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default delivery;
