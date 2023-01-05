import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res.json());
      })
      .then((res) => {
        setPhotos(res);
      });
  }, [url]);

  return { photos };
};

export default useFetch;
