import React from "react";

const Bird = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
    </div>
  );
};

export default Bird;
