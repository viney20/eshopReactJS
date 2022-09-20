import React, { useContext } from "react";
import { AppContex } from "../../App";
import "./checkout.css";
function Cartitem(props) {
  const { cart, setCart } = useContext(AppContex);
  function handleRemove() {
    setCart(cart.filter((item) => item.id !== props.payload.id));
  }
  return (
    <div className="itemSection">
      <div className="listitem">
        <img src={props.payload.image} alt="prodimg" className="CartProdimg" />
        <span className="CartProd">{props.payload.title}</span>
        <div className="prodPrice">
          <span>${props.payload.price}</span>
          <span style={{ color: "blue" }}>Save for later</span>
          <span style={{ color: "red" }} onClick={handleRemove}>
            Remove
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
