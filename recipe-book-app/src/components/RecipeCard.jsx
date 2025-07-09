import { items } from "../Data";
import borscht from "../assets/borscht.jpg";

function RecipeCard(props) {
  const tags = props.tags.map((tag, index) => (
    <span key={index} className="tag">
      {tag}
    </span>
  ));

  let difficultyClass = "easy";
  if (props.difficulty === "Easy") {
    difficultyClass = "easy";
  } else if (props.difficulty === "Hard") {
    difficultyClass = "hard";
  } else if (props.difficulty === "Medium") {
    difficultyClass = "medium";
  }

  return (
    <div className="recipeCard" key={props.id}>
      {props.children}
      <img className="recipeImage" src={props.imageUrl} alt={props.title} />
      <div className="recipeContent">
        <h1>{props.title}</h1>
        <h3>Time: {props.prepTime} min</h3>
        <h3>
          <span className={difficultyClass}>{props.difficulty}</span>
        </h3>
        <h3>Category: {props.category}</h3>
        <h3 className="tagsContainer">{tags}</h3>
      </div>
    </div>
  );
}
export default RecipeCard;
