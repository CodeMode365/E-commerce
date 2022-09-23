import React from "react";
import { Proudct, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Beset Selling Product</h2>
        <p>Speakers of many vaiations</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
    </>
  );
};

export default Home;
