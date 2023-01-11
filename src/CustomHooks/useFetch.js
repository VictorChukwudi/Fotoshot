import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const result = data.results.map((item) => {
            return {
              id: data.results.indexOf(item) + 1,
              img: item.urls.regular,
            };
          });
          setImages(result);
        });
    }, 1000);
  }, [url]);

  return { images };
};

export default useFetch;
// "https://api.unsplash.com/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=1&per_page=12"
