import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");

  const request = useCallback(async () => {
    const accessKey = "vaA7ss9kWXCZcZKr1AfMQeh6PXASpHspWYLbkY2UzG8";
    let path = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

    if (input !== "") {
      path = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&client_id=${accessKey}`;
    }

    const res = await fetch(path);
    const data = await res.json();

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  }, [input]);

  useEffect(() => {
    request();
  }, [input, request]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return (
    <>
      <form className="row m-1 p-0" onSubmit={handleSubmit}>
        <label className="col-12 col-sm-2 col-lg-1 p-0">Search</label>
        <input
          className="col col-sm col-lg mx-1 p-0"
          type="text"
          name="inputText"
        />
        <button
          type="submit"
          className="col-2 m-0 p-0 col-sm-1 col-lg-1 btn btn-warning btn-sm"
        >
          <span className="material-icons">search</span>
        </button>
      </form>

      <hr />

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
