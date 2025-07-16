import { Link, useParams } from "react-router-dom";

function RecipeOverview(props) {
  const { recipeId } = useParams();

  const recipe = props.items.find((recipeObj) => recipeObj.id === recipeId);

  const ingredients = recipe.ingredients.map((ingredient, index) => (
    <div key={index} className="ingredient-item">
      <span className="ingredient-name">{ingredient.name}</span>
      <span className="ingredient-quantity">{ingredient.quantity}</span>
    </div>
  ));

  const steps = recipe.instructions.map((step, index) => (
    <div key={index} className="recipe-step">
      <span className="step-number">{index + 1}</span>
      <span className="step-text">{step}</span>
    </div>
  ));

  return (
    <div className="recipe-overview">
      <img className="recipe-image" src={recipe.imageUrl} alt={recipe.title} />
      <Link to={`/recipes/${recipeId}/update`}>
        <button id="edit-btn">Edit</button>
      </Link>
      <h1 className="recipe-title">{recipe.title}</h1>
      <p className="recipe-description">{recipe.description}</p>

      <div className="overview-grid">
        <div className="key">Prep Time:</div>
        <div className="value">{recipe.prepTime} minutes</div>

        <div className="key">Servings:</div>
        <div className="value">{recipe.servings} people</div>

        <div className="key">Difficulty:</div>
        <div className="value">{recipe.difficulty}</div>

        <div className="key">Calories:</div>
        <div className="value">{recipe.calories} kcal</div>

        <div className="key">Tags:</div>
        <div className="value">{recipe.tags.join(", ")}</div>
      </div>

      <div className="section">
        <h2 className="section-title">Ingredients</h2>
        {ingredients}
      </div>

      <div className="section">
        <h2 className="section-title">Steps</h2>
        {steps}
      </div>
    </div>
  );
}

export default RecipeOverview;
