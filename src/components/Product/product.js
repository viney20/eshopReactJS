import React, { useContext } from "react";
import "./product.css";
import { AppContex } from "../../App";

function Product(props) {
  const { setCart } = useContext(AppContex);

  function handleClick() {
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
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
