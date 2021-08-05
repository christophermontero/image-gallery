import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);

  const request = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=vaA7ss9kWXCZcZKr1AfMQeh6PXASpHspWYLbkY2UzG8"
    );
    const data = await res.json();

    setImages(data);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      {
        images.map((img) => { return <Card key={img.id} img={img.urls.thumb} /> })
      }
    </>
  );
};

export default Cards;
