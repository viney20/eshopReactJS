import React, { useContext, useState } from "react";
import "./product.css";
import { AppContex } from "../../App";

function Product(props) {
  const { setCart } = useContext(AppContex);
  const [btntext, setbtntext] = useState("Add to cart");
  function handleClick() {
    setbtntext("✓ Added to cart");
    setCart((oldvalue) => [...oldvalue, props.data]);
  }
  return (
    <div className="productContainer">
      <div className="imgcontainer">
        <img src={props.data.image} alt="" className="prodImg" />
      </div>
      <div className="details">
        <span>{props.data.title}</span>
        <span>
          {"$"}
          {props.data.price}
        </span>
        <button className="btn" onClick={handleClick}>
          {btntext}
        </button>
      </div>
    </div>
  );
}

export default Product;
