/**
 * Handle card visibility according to the action: click, resize or init
 * @param {string} action (resize, click ou initialization)
 */
export function handleCardVisibility(action) {
  const isSmall = window.innerWidth < 768,
    isMedium = window.innerWidth >= 768 && window.innerWidth < 1600,
    crossSellWrapperEl = document.querySelector(".cross-sell-wrapper"),
    crossSellContainerEl = document.querySelector(".cross-sell-container");

  // validation of elements
  if (crossSellWrapperEl && crossSellContainerEl) {
    let cardsEl = Array.from(crossSellContainerEl.querySelectorAll(".item")),
      newActiveCard;
    const firstActiveCard = crossSellContainerEl.querySelector(".activeParent");

    if (cardsEl.length !== 0) {
      switch (action) {
        case "init":
          // Handle initialization logic
          const cardsSelected = cardsEl.slice(
            0,
            isSmall ? 1 : isMedium ? 2 : 3
          );
          cardsSelected.forEach((card) => {
            card.classList.add("activeParent");
          });
          break;
        case "leftClick":
          // Handle left click logic
          if (firstActiveCard) {
            if (isSmall) {
              newActiveCard = firstActiveCard.previousElementSibling;
              firstActiveCard.classList.remove("activeParent");
              newActiveCard.classList.add("activeParent");
            } else if (isMedium) {
              newActiveCard = firstActiveCard.previousElementSibling;
              firstActiveCard.nextElementSibling.classList.remove(
                "activeParent"
              );
              newActiveCard.classList.add("activeParent");
            } else {
              newActiveCard = firstActiveCard.previousElementSibling;
              firstActiveCard.nextElementSibling.nextElementSibling.classList.remove(
                "activeParent"
              );
              newActiveCard.classList.add("activeParent");
            }
          }

          break;
        case "rightClick":
          // Handle right click logic
          if (firstActiveCard) {
            if (isSmall) {
              newActiveCard = firstActiveCard.nextElementSibling;
              firstActiveCard.classList.remove("activeParent");
              newActiveCard.classList.add("activeParent");
            } else if (isMedium) {
              newActiveCard =
                firstActiveCard.nextElementSibling.nextElementSibling;
              firstActiveCard.classList.remove("activeParent");
              newActiveCard.classList.add("activeParent");
            } else {
              newActiveCard =
                firstActiveCard.nextElementSibling.nextElementSibling
                  .nextElementSibling;
              firstActiveCard.classList.remove("activeParent");
              newActiveCard.classList.add("activeParent");
            }
          }

          break;
        case "resize":
          // Handle resize logic
          if (firstActiveCard) {
            if (!isSmall && !isMedium) {
              firstActiveCard.nextElementSibling.nextElementSibling.classList.add(
                "activeParent"
              );
            } else {
              firstActiveCard.nextElementSibling.nextElementSibling.classList.remove(
                "activeParent"
              );
              firstActiveCard.nextElementSibling.classList.add("activeParent");
            }
          }

          break;
        default:
          break;
      }
    }
  }
}
