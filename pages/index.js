import React from "react";
import { Proudct, FooterBanner, HeroBanner, Footer } from "../components";
import { client } from "../lib/client";

const Home = ({ products, banners }) => {
  console.log(banners)
  return (
    <div>
      <HeroBanner heroBanner={banners} />
      <div className="products-heading">
        <h2>Beset Selling Product</h2>
        <p>Speakers of many vaiations</p>
      </div>
      <div>{products?.map((product) => product)}</div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="product"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};
export default Home;
