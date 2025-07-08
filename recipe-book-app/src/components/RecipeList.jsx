import borscht from "../assets/borscht.jpg";
import RecipeCard from "./RecipeCard";

function RecipeList(props) {
  const list = props.items.map((recipeObj) => {
    return (
      <RecipeCard
        title={recipeObj.title}
        prepTime={recipeObj.prepTime}
        category={recipeObj.category}
        difficulty={recipeObj.difficulty}
        tags={recipeObj.tags}
        imageUrl={recipeObj.imageUrl}
      />
    );
  });
  return (
    <div className="recipeGrid">
      {list}
    </div>
  );
}
export default RecipeList;
