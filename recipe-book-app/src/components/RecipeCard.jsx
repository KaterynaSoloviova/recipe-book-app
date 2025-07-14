import { useNavigate } from "react-router-dom";
import Tags from "./Tags";

function RecipeCard(props) {

  let difficultyClass = "easy";
  if (props.difficulty === "Easy") {
    difficultyClass = "easy";
  } else if (props.difficulty === "Hard") {
    difficultyClass = "hard";
  } else if (props.difficulty === "Medium") {
    difficultyClass = "medium";
  }

  const navigate = useNavigate();

  const goToRecipe = () => {
    navigate(`/recipes/${props.id}`);
  };

  return (
    <div onClick={goToRecipe} className="recipeCard" key={props.id}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          props.onDelete(props.id);
        }}
        className="deleteBtn"
      >
        <i className="fa fa-close"></i>
      </button>
      <img className="recipeImage" src={props.imageUrl} alt={props.title} />
      <div className="recipeContent">
        <h1>{props.title}</h1>
        <h3>Time: {props.prepTime} min</h3>
        <h3>
          <span className={difficultyClass}>{props.difficulty}</span>
        </h3>
        <h3>Category: {props.category}</h3>
        <Tags tags={props.tags}/>
      </div>
    </div>
  );
}
export default RecipeCard;
