/**
 * Handle layout abd responsive behaviour of cross-sell component : reset card and container width and update max left value
 * @param {number} maxLeftValue
 * @param {number} productNb
 * @returns maxLeftValue updated
 */
export function handleCrossSellDisplay(maxLeftValue, productNb) {
  const isSmall = window.innerWidth < 768,
    isMedium = window.innerWidth >= 768 && window.innerWidth < 1600,
    rightArrowEl = document.querySelector(".next-btn"),
    crossSellWrapperEl = document.querySelector(".cross-sell-wrapper"),
    crossSellContainerEl = document.querySelector(".cross-sell-container");

  // elements selected validation
  if (rightArrowEl && crossSellWrapperEl && crossSellContainerEl) {
    // Small screen
    if (isSmall) {
      const cardsEl = Array.from(
        crossSellContainerEl.querySelectorAll(".item")
      );
      cardsEl.forEach((cardEl) => {
        cardEl.style.width = `${window.innerWidth}px`;
      });
      crossSellContainerEl.style.width = `${productNb * window.innerWidth}px`;
      crossSellWrapperEl.style.width = "100%";
      maxLeftValue = -(window.innerWidth * productNb);
      return maxLeftValue;
    }
    //Medium screen
    if (isMedium) {
      crossSellContainerEl.style.width = `${productNb * 384}px`;
      crossSellWrapperEl.style.width = "768px";
      maxLeftValue = -(384 * productNb) + 768;
      const cardsEl = Array.from(
        crossSellContainerEl.querySelectorAll(".item")
      );
      cardsEl.forEach((cardEl) => {
        cardEl.style.width = `384px`;
      });
      crossSellContainerEl.style.left = "0px";
      if (rightArrowEl) {
        if (rightArrowEl.classList.contains("hidden"))
          rightArrowEl.classList.remove("hidden");
      }
      if (
        crossSellWrapperEl &&
        parseInt(crossSellContainerEl.style.left) > maxLeftValue &&
        rightArrowEl &&
        rightArrowEl.classList.contains("hidden")
      ) {
        rightArrowEl.classList.remove("hidden");
      }

      return maxLeftValue;
    }
    //Large sreen
    crossSellWrapperEl.style.width = "1152px";
    if (rightArrowEl && crossSellContainerEl.style.left != "") {
      rightArrowEl.className =
        parseInt(crossSellContainerEl.style.left) - 384 > maxLeftValue
          ? "next-btn"
          : "next-btn hidden";
    }
    maxLeftValue = -(384 * productNb) + 768;
    crossSellContainerEl.style.width = `${productNb * 384}px`;
    return maxLeftValue;
  }
}
