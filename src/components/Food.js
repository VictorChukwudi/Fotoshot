import React from "react";

const Food = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
    </div>
  );
};

export default Food;
