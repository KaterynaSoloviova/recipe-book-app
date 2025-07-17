import { useNavigate } from "react-router-dom";
import Tags from "./Tags";

function RecipeCard({id, title, difficulty, prepTime, category, tags, imageUrl, onDelete}) {
  let difficultyClass = "easy";
  if (difficulty === "Easy") {
    difficultyClass = "easy";
  } else if (difficulty === "Hard") {
    difficultyClass = "hard";
  } else if (difficulty === "Medium") {
    difficultyClass = "medium";
  }

  const navigate = useNavigate();

  const goToRecipe = () => {
    navigate(`/recipes/${id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div onClick={goToRecipe} className="recipeCard" key={id}>
      <button onClick={handleDelete} className="deleteBtn">
        <i className="fa fa-close"></i>
      </button>
      <img className="recipeImage" src={imageUrl} alt={title} />
      <div className="recipeContent">
        <h1>{title}</h1>
        <h3>Time: {prepTime} min</h3>
        <h3>
          <span className={difficultyClass}>{difficulty}</span>
        </h3>
        <h3>Category: {category}</h3>
        <Tags tags={tags} />
      </div>
    </div>
  );
}

export default RecipeCard;