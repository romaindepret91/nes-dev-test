/**
 * Handle click on carousel button
 * @param {number} leftVal
 * @param {booleanumber} maxLeftValue
 * @param {boolean} isRightClick
 * @returns leftVal updated
 */
export function handleCarouselArrowClick(leftVal, maxLeftValue, isRightClick) {
  const crossSellContainerEl = document.querySelector(".cross-sell-container"),
    leftArrowEl = document.querySelector(".carousel").firstElementChild,
    rightArrowEl =
      document.querySelector(".carousel").firstElementChild.nextElementSibling,
    isSmall = window.innerWidth < 768,
    isMedium = window.innerWidth >= 768 && window.innerWidth < 1600,
    currentLeftValue = parseInt(localStorage.getItem("leftVal"));
  let newLeftValue;

  // Set new value of container offset
  if (isRightClick ? currentLeftValue > maxLeftValue : currentLeftValue < 0) {
    newLeftValue = isRightClick
      ? !isSmall
        ? currentLeftValue - 384
        : currentLeftValue - window.innerWidth
      : !isSmall
      ? currentLeftValue + 384
      : currentLeftValue + window.innerWidth;
    crossSellContainerEl.style.left = `${newLeftValue}px`;
    leftVal = `${newLeftValue}px`;
    localStorage.setItem("leftVal", newLeftValue);
  }

  // Hide or show right and left arrows
  parseInt(leftVal) === 0
    ? (leftArrowEl.className = "prev-btn hidden")
    : (leftArrowEl.className = "prev-btn ");

  if (isSmall) {
    parseInt(leftVal) === maxLeftValue + window.innerWidth
      ? (rightArrowEl.className = "next-btn hidden")
      : (rightArrowEl.className = "next-btn ");
  } else if (isMedium) {
    parseInt(leftVal) === maxLeftValue
      ? (rightArrowEl.className = "next-btn hidden")
      : (rightArrowEl.className = "next-btn ");
  } else {
    parseInt(leftVal) === maxLeftValue + 384
      ? (rightArrowEl.className = "next-btn hidden")
      : (rightArrowEl.className = "next-btn ");
  }

  return leftVal;
}
