import React, { useContext } from "react";
import "./home.css";
import Card from "../card/card";
import redHoodie from "../../image/redHoodie.jpg";
import Product from "../Product/product";
import dataapi from "../../data";

const maindata = {
  title: "TRENDY HOODIES",
  subtitle: "UPTO 50% OFF ON TOP BRANDS",
  img: redHoodie,
};
function Home() {
  return (
    <div className="container">
      <div className="subcontainer">
        <Card data={maindata} size={{ width: "inherit" }} />
      </div>
      <div className="offerSection">
        <Card data={maindata} size={{ width: "325px" }} />
        <Card data={maindata} size={{ width: "325px" }} />
        <Card data={maindata} size={{ width: "325px" }} />
      </div>
      <div className="prod">
        {dataapi.map((item) => (
          <Product data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
