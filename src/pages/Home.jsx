import axios from "axios";
import React, { useEffect, useState } from "react";
import MiniCard from "../components/MiniCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);

        console.log(response.data);
      })
      .catch((error) => {
        console.log("error is", error);
      });
  }, []);
  return (
    <div className="min-h-screen ">
      <div className="mt-2 border-b-2 border-b-blue-950 pb-1 text-center mb-2 font-bold text-xl text-blue-950">
        HOME
      </div>

      <div className=" m-4 sm:mx-8 md:mx-10 grid grid-cols-12 gap-4">
        {products.length > 0
          ? products.map((item) => (
              <MiniCard
                key={item.id}
                productId={item.id}
                image={item.image}
                title={item.title}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Home;
