import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const request = useCallback(async () => {
    const accessKey = "vaA7ss9kWXCZcZKr1AfMQeh6PXASpHspWYLbkY2UzG8";
    let path = `https://api.unsplash.com/photos/?per_page=50&client_id=${accessKey}`;

    if (input !== "") {
      path = `https://api.unsplash.com/search/photos/?per_page=50&query=${encodeURI(
        input
      )}&client_id=${accessKey}`;
    }

    const res = await fetch(path);
    const data = await res.json();

    setLoading(true);

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setTimeout(() => setLoading(false), 500);
  }, [input]);

  useEffect(() => {
    request();
  }, [input, request]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return [images, loading, handleSubmit];
};
