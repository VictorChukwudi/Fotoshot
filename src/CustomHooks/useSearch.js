import { useEffect, useState } from "react";

const useSearch = (url) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (/query=/.test(url)) {
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
          setPhotos(result);
        });
    } else {
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
    }
    // const fetchPhotos = () => {

    // };
    // const timer = setTimeout(() => {
    //   fetchPhotos();
    // }, 1000);

    // return () => clearTimeout(timer);
  }, [url]);

  return { photos };
};

export default useSearch;
// "https://api.unsplash.com/photos?client_id=UDXe0X7kwY-_vsbi9agQUQ8v1CP5zAP53rztl63JEOI&page=1&per_page=12"
