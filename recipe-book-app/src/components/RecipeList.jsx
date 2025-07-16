import RecipeCard from "./RecipeCard";

function RecipeList(props) {
  const list = props.items.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        title={recipe.title}
        prepTime={recipe.prepTime}
        category={recipe.category}
        difficulty={recipe.difficulty}
        tags={recipe.tags}
        imageUrl={recipe.imageUrl}
        onDelete={props.onDelete}
      ></RecipeCard>
    );
  });
  return <div className="recipe-grid">{list}</div>;
}

export default RecipeList;
