import React, { useContext } from "react";
import { AppContex } from "../../App";
import CartItem from "./cartitem";
function Checkout() {
  const { cart } = useContext(AppContex);
  console.log(cart.length);

  let result = cart.reduce((acc, obj) => acc + obj.price, 0);
  return (
    <div className="checkoutContainer">
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <CartItem payload={item} key={item.id} />
      ))}
      <div className="billSection">
        <div className="totalbillSection">
          <div className="subTotal">
            <span>SubTotal</span>
            <span>{cart.length !== 0 && "$" + " " + result}</span>
          </div>
          <div className="deliveryChargeSection">
            <span>Estimate delivery </span>
            <span>$5</span>
          </div>
          <div className="totalSection">
            <h3>Total</h3>
            <h3>${result + 5}</h3>
          </div>
          <span>Additional fees and taxes may apply</span>
        </div>
        <div className="paymentModeSection">
          <span> Accepted payment methods: </span>
        </div>
        <div className="btnSection">
          <button>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
