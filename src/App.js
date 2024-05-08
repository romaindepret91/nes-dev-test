import FoodAndBites from "./FoodAndBites";

/**
 *
 * @returns main container including the F&B page component
 */
export default function App() {
  return (
    <div id="main-container">
      <header id="top"></header>
      <main id="main">
        <FoodAndBites></FoodAndBites>
      </main>
    </div>
  );
}
