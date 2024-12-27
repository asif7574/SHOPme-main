import React from "react";
import GreatDiscount from "../assets/Greatdiscount.jpg"
import MenBanner from "../assets/men banner.jpg"
import BigSale from "../assets/big sale.jpg"
import WomenBanner from "../assets/Women banner.jpg"
import Jewelery from "../assets/jewelery.jpg"
import Electronics from "../assets/electronics.jpg"

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <img src={GreatDiscount} />
      <img src={BigSale} />
      <img src={MenBanner} />
      <img src={WomenBanner} />
      <img src={Jewelery} />
      <img src={Electronics} />
    </div>
  );
};

export default Welcome;
