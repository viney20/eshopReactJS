import React from "react";

function cartitem(props) {
  return (
    <div className="itemSection">
      <div className="listitem">
        <img src={props.payload.image} alt="prodimg" />
        <span>{props.payload.title}</span>
        <span>${props.payload.price}</span>
      </div>
    </div>
  );
}

export default cartitem;
