import React from "react";
import "./HighlightedCard.css";

/**
 *
 * @returns HighlightedCard component
 */
export default function HighlightedCard() {
  return (
    <div className="highlighted-card-component">
      <div className="highlighted-card-container">
        <div className="highlighted-card-item">
          <h2 className="highlighted-card-item__title">
            Coffee Cups and Saucers
          </h2>
          <div className="highlighted-card-item__cta">
            {" "}
            <a href="https://www.nespresso.com/ca/en/accessories/coffee-cups">
              Discover more
            </a>
          </div>
        </div>
        <div className="highlighted-card-item">
          <h2 className="highlighted-card-item__title">Travel Mugs</h2>
          <div className="highlighted-card-item__cta">
            <a href="https://www.nespresso.com/ca/en/accessories/travel-coffee-mugs">
              Discover more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
