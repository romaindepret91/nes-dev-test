import React from "react";
import "./Card.css";

/**
 *
 * @returns Card component
 */
export default function Card({ accessory }) {
  return (
    <div className="item d-flex">
      <div className="card-expandable d-flex">
        <div className="card-expandable__card d-flex">
          <div className="card-expandable__cover">
            <img src={accessory.productImages[0]} alt={accessory.productName} />
          </div>
          <div className="card-expandable__content">
            <h3 className="card-expandable-title">{accessory.productName}</h3>
            <p className="card-expandable-headline">
              {accessory.productDescription}{" "}
            </p>
            <button className="card-expandable-details-btn">
              <span>
                <a href={accessory.productUrl}>Details</a>
              </span>
            </button>
            <div className="card-expandable__priceWrapper">
              <div className="card-expandable__price">
                ${accessory.productPrice}{" "}
              </div>
              <button className="card-expandable-addToCart-btn">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
