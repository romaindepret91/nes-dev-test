import React, { useEffect } from "react";
import Card from "../card/Card";
import "./CrossSell.css";
import { handleCrossSellDisplay } from "../../helpers/handleCrossSellDisplay";
import { handleCarouselArrowClick } from "../../helpers/handleCarouselArrowClick";
import { handleCardVisibility } from "../../helpers/handleCardVisibility";

/**
 * @returns Cross Sell component
 */
export default function CrossSell({ accessories }) {
  let leftVal = "0px",
    wrapperStyle = {
      width: `${
        window.innerWidth < 768
          ? "100%"
          : window.innerWidth >= 1600
          ? "1152px"
          : "768px"
      }`,
      left: leftVal,
    },
    containerStyle = {
      width: `${accessories.length * 384}px`,
    },
    maxLeftValue =
      window.innerWidth > 768
        ? -(accessories.length * 384) + 768
        : -(accessories.length * window.innerWidth) + window.innerWidth * 2,
    isRightclick,
    action;
  localStorage.setItem("leftVal", leftVal);

  /**
   * Handle right button click
   */
  const handleOnClickNextBtn = () => {
    leftVal = handleCarouselArrowClick(
      leftVal,
      maxLeftValue,
      (isRightclick = true)
    );
    handleCardVisibility((action = "rightClick"));
  };

  /**
   * Handle right button click
   */
  const handleOnClickPreBtn = () => {
    leftVal = handleCarouselArrowClick(
      leftVal,
      maxLeftValue,
      (isRightclick = false)
    );
    handleCardVisibility((action = "leftClick"));
  };

  // Handle component behavior and display on screen resize
  window.addEventListener("resize", () => {
    maxLeftValue = handleCrossSellDisplay(maxLeftValue, accessories.length);
    handleCardVisibility((action = "resize"));
  });

  // Handle component behavior and display on page load
  window.addEventListener("load", () => {
    maxLeftValue = handleCrossSellDisplay(maxLeftValue, accessories.length);
    handleCardVisibility((action = "init"));
  });

  return (
    accessories.length !== 0 && (
      <div className="cross-sell-component">
        <div className="carousel-wrapper">
          <div className="carousel">
            <button
              onClick={handleOnClickPreBtn}
              className={
                parseInt(leftVal) == 0 ? "prev-btn hidden" : "prev-btn"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.2 5h-1.4l-7 7 7 7h1.4l-7-7 7-7Z"></path>
              </svg>
            </button>
            <button onClick={handleOnClickNextBtn} className="next-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.2 5H8.8l7 7-7 7h1.4l7-7-7-7Z"></path>
              </svg>
            </button>
            <div className="cross-sell-wrapper" style={wrapperStyle}>
              <div
                className="cross-sell-container d-flex"
                style={containerStyle}
              >
                {accessories.map((accessory) => (
                  <Card key={accessory.sku} accessory={accessory} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
