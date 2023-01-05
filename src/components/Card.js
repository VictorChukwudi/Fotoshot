import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
    </div>
  );
};

export default Card;
