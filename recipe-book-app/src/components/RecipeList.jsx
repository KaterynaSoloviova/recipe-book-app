import { useState } from "react";
import borscht from "../assets/borscht.jpg";
import RecipeCard from "./RecipeCard";

function RecipeList(props) {
  const [recipes, setRecipes] = useState(props.items);

  const deleteRecipe = (recipeId) => {
    const newList = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    //console.log(newList);
    setRecipes(newList);
  };

  const list = recipes.map((recipeObj) => {
    return (
      <RecipeCard
        key={recipeObj.id}
        id={recipeObj.id}
        title={recipeObj.title}
        prepTime={recipeObj.prepTime}
        category={recipeObj.category}
        difficulty={recipeObj.difficulty}
        tags={recipeObj.tags}
        imageUrl={recipeObj.imageUrl}
      >
        <button
          onClick={() => {
            deleteRecipe(recipeObj.id);
          }}
          className="deleteBtn"
        >
          <i className="fa fa-close"></i>
        </button>
      </RecipeCard>
    );
  });
  return <div className="recipeGrid">{list}</div>;
}
export default RecipeList;
