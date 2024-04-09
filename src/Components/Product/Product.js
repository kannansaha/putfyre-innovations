import React from "react";
import "./Product.css";
import ProductImg from "../Images/Product.png";

const Product = () => {
  return (
    <>
      <div className="ProductContainer">
        <img src={ProductImg} alt="/" className="ProductImg"></img>
        <p className="ProductPara">
          Happy to see your interest on our software product, currently we are
          developing a surprise product for you. We’ll release on 08-03-2025.
          Keep an interest for using your surprise product application.
        </p>
      </div>
    </>
  );
};

export default Product;
