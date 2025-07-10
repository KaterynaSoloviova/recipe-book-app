import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import { items } from "./Data";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import RecipeOverview from "./pages/RecipeOverview";
import NotFound from "./pages/NotFound";

function App() {
  const [recipes, setRecipes] = useState(items);

  const deleteRecipe = (recipeId) => {
    const newList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipes(newList);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={<RecipeList items={recipes} onDelete={deleteRecipe} />}
            />
            <Route
              path="/recipes/:recipeId"
              element={<RecipeOverview items={recipes} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
