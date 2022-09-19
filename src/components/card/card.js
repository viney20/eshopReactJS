import React from "react";

import "./card.css";
function card({ data, size }) {
  return (
    <div className="carousel" style={size}>
      <img src={data.img} alt="logo" className="img" />
      <div className="nameOfProduct">
        <h1 className="title"> {data.title}</h1>
        <span className="subTitle">{data.subtitle}</span>
        <button className="btn">See More</button>
      </div>
    </div>
  );
}
{
}

export default card;
