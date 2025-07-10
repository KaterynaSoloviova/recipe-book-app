import { useParams } from "react-router-dom";

function RecipeOverview(props) {
  const { recipeId } = useParams();

  const recipe = props.items.find((recipeObj) => {
    return recipeObj.id === recipeId;
  });

  return <h1>{recipe.title}</h1>;
}

export default RecipeOverview;
