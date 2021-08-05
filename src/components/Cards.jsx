import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState({
    urls: {
      thumb: ""
    }
  });

  const request = async () => {
    const res = await fetch(
      "https://api.unsplash.com/photos/random/?client_id=vaA7ss9kWXCZcZKr1AfMQeh6PXASpHspWYLbkY2UzG8"
    );
    const data = await res.json();

    setImages(data);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <Card img={images.urls.thumb} />
    </>
  );
};

export default Cards;
