import React, { Component } from "react";
import "./content.css";

class Content extends Component {
  render() {
    let { name, ingredients, price, imgURL, soldOut } = this.props;
    return (
      <div className="content">
        <div className={soldOut ? "product-list-true" : "product-list"}>
          <div className="img">
            <img src={imgURL} alt={name} />
          </div>
          <div className="product-details">
            <div className={soldOut ? "product-name-true" : "product-name"}>
              <h4>{name}</h4>
            </div>
            <div
              className={
                soldOut ? "product-ingredients-true" : "product-ingredients"
              }
            >
              <p>Ingredients: {ingredients}</p>
            </div>
            <div className={soldOut ? "product-price-true" : "product-price"}>
              <p>
                <b>{soldOut ? "Sold Out" : price}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
