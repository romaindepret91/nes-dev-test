import React from "react";
import FoodAndBites from "./FoodAndBites";

/**
 *
 * @returns main container including the F&B page component
 */
export default function App() {
  return (
    <React.Fragment>
      <div id="main-container">
        <header id="top"></header>
        <main id="main">
          <FoodAndBites></FoodAndBites>
        </main>
      </div>
    </React.Fragment>
  );
}
