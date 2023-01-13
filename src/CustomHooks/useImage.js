import { useState, useEffect } from "react";
import thumbnail from "../images/thumbnail.png";

const useImage = (img) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => setSrc(img);
  }, [img]);

  return src ? <img src={src} alt="" /> : <img src={thumbnail} alt="" />;
};

export default useImage;
