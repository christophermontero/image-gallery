import React from "react";
import Card from "./Card";
import Loader from "./Loader";
import FormImg from "./FormImg";
import { useFetchImages } from "../hooks/useFetchImages";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();

  return (
    <>
      <FormImg handleSubmit={handleSubmit} />

      <hr />

      {loading && <Loader />}

      <div className="row">
        {images.map((img) => {
          return (
            <div className="col m-1 p-0" key={img.id}>
              <Card img={img.urls.thumb} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
