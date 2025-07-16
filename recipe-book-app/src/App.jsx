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
import RecipeForm from "./pages/RecipeForm";
import EditRecipe from "./pages/EditRecipe";

function App() {
  // For the responsive menu:
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const [recipes, setRecipes] = useState(items);

  const deleteRecipe = (recipeId) => {
    const newList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipes(newList);
  };

  const createRecipe = (newRecipeDetails) => {
    const nextId = Math.max(...recipes.map((recipe) => recipe.id)).toString();
    console.log(nextId);
    const newRecipe = {
      ...newRecipeDetails,
      id: nextId + 1,
    };

    const newList = [newRecipe, ...recipes];
    console.log(newList);

    setRecipes(newList);
  };

  const updateRecipe = (recipeId, updatedRecipe) => {
    const newList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipes([updatedRecipe, ...newList]);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <div className="content">
        <Sidebar menuOpen={menuOpen} />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={<RecipeList items={recipes} onDelete={deleteRecipe} />}
            />
            <Route
              path="/create"
              element={<RecipeForm onCreate={createRecipe} />}
            />
            <Route
              path="/recipes/:recipeId"
              element={<RecipeOverview items={recipes} />}
            />
            <Route
              path="/recipes/:recipeId/update"
              element={<EditRecipe items={recipes} onUpdate={updateRecipe} />}
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
