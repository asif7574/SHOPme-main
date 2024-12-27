import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallCard from "../components/SmallCard";
import { useSelector } from "react-redux";

const Main = ({ category }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [category]);

  const loginStatus = useSelector((state) => state.auth.loginStatus);

  return (
    <div className="min-h-screen">
      <div className="mt-2 border-b-2 border-b-blue-950 pb-1 text-center mb-2 font-bold text-xl text-blue-950">
        {category.toUpperCase()}
      </div>
      <div className="m-4 sm:mx-8 md:mx-10 grid grid-cols-12 gap-4">
        {loginStatus
          ? list.length > 0
            ? list.map((item) => (
                <SmallCard
                  key={item.id}
                  category={category}
                  productId={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating.rate}
                />
              ))
            : "loading.."
          : "Please Login First"}
      </div>
    </div>
  );
};

export default Main;
