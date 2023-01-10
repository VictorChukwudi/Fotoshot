import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const result = data.map((item) => {
          return {
            id: data.indexOf(item) + 1,
            img: item.urls.regular,
          };
        });
        setPhotos(result);
      });
  }, [url]);

  return { photos };
};

export default useFetch;
// "https://api.unsplash.com/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=1&per_page=12"
