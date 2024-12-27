import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BigCard from "../components/BigCard";

const Detail = () => {
  const { code } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${code}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, [code]);
  return (
    <div>
      {productDetails ? <BigCard product={productDetails} /> : "Loading..."}
    </div>
  );
};

export default Detail;
