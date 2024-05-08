import React from "react";
import { useContext } from "react";
import CrossSell from "./components/cross_sell/CrossSell";
import HeroBanner from "./components/hero_banner/HeroBanner";
import SecondaryTitle from "./components/secondary_title/SecondaryTitle";
import HighlightedCard from "./components/highlighted_card/HighlightedCard.jsx";
import { AccessoriesContext } from "./context/AccessoriesContext";
import "./FoodAndBites.css";

/**
 *
 * @returns the F&B page component
 */
export default function FoodAndBites() {
  const { accessories } = useContext(AccessoriesContext);
  return (
    <div id="block-8824486057461" className="free-html">
      <HeroBanner></HeroBanner>
      <CrossSell accessories={accessories}></CrossSell>
      <SecondaryTitle></SecondaryTitle>
      <HighlightedCard></HighlightedCard>
    </div>
  );
}
