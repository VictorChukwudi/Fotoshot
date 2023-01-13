import React from "react";
import useImage from "../CustomHooks/useImage";
const Card = (props) => {
  const img = props.img;
  return <div className="card">{useImage(img)}</div>;
};

export default Card;
