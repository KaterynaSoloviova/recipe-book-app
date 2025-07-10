import { useState } from "react";
import borscht from "../assets/borscht.jpg";
import RecipeCard from "./RecipeCard";

function RecipeList(props) {
  const list = props.items.map((recipeObj) => {
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
        onDelete={props.onDelete}
      ></RecipeCard>
    );
  });
  return <div className="recipeGrid">{list}</div>;
}
export default RecipeList;
