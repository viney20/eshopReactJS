import React from "react";

function checkout() {
  return (
    <div className="checkoutContainer">
      <div className="itemSection">
        <h1>Shopping Cart</h1>
        <div className="listitem">
          <img src="" alt="" />
          <span>product Name</span>
          <span>$10</span>
        </div>
      </div>
      <div className="billSection">
        <div className="totalbillSection">
          <div className="subTotal">
            <span>SubTotal</span>
            <span>$524</span>
          </div>
          <div className="deliveryChargeSection">
            <span>Estimate delivery </span>
            <span>$5</span>
          </div>
          <div className="totalSection">
            <h3>Total</h3>
            <h3>$55555</h3>
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

export default checkout;
