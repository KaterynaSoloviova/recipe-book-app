import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tags from "../components/Tags";
import "./RecipeForm.css";

function RecipeForm(props) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [serving, setServing] = useState("");
  const [calories, setCalories] = useState("");

  const [tags, setTags] = useState([]);
  const [tagElm, setTagElm] = useState("");

  const [instructions, setInstructions] = useState([]);
  const [instructionStep, setInstructionStep] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const addIngredient = () => {
    if (ingredientName && ingredientQuantity) {
      setIngredients([
        ...ingredients,
        { name: ingredientName, quantity: ingredientQuantity },
      ]);
      // Clear inputs after adding
      setIngredientName("");
      setIngredientQuantity("");
    }
  };

  const addInstruction = () => {
    if (instructionStep) {
      setInstructions([...instructions, instructionStep]);
      // Clear inputs after adding
      setInstructionStep("");
    }
  };

  const addTag = () => {
    if (tagElm && tags.length <= 5) {
      setTags([...tags, tagElm]);
      setTagElm("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title: title,
      difficulty: difficulty,
      description: description,
      imageUrl: image,
      category: category,
      prepTime: prepTime,
      servings: serving,
      ingredients: ingredients,
      instructions: instructions,
      tags: tags,
      calories: calories,
    };

    props.onCreate(newRecipe);

    setTitle("");
    setDifficulty("");
    setDescription("");
    setImage("");
    setCategory("");
    setPrepTime("");
    setServing("");
    setCalories({});

    setTags([]);
    setTagElm("");

    setInstructions([]);
    setInstructionStep("");

    setIngredients([]);
    setIngredientName("");
    setIngredientQuantity("");

    navigate("/");
  };

  return (
    <div className="recipe-form-container">
      <h2>Create new recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <div className="recipe-form-columns">
          {/* Left Column */}
          <div className="form-column left-column">
            <div className="general-panel">
              <label htmlFor="image">
                Upload image:
                <input
                  id="image"
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </label>
              {image && (
                <div>
                  <p>Image preview:</p>
                  <img src={image} alt="preview" />
                </div>
              )}
              <br />

              <label htmlFor="title">
                Title:
                <input
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Enter the dish title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />
              </label>

              <label htmlFor="difficulty">
                Difficulty:
                <input
                  id="difficulty"
                  type="text"
                  name="difficulty"
                  value={difficulty}
                  placeholder="e.g. Easy"
                  onChange={(e) => {
                    setDifficulty(e.target.value);
                  }}
                  required
                />
              </label>

              <label htmlFor="category">
                Category:
                <input
                  id="category"
                  type="text"
                  name="category"
                  value={category}
                  placeholder="e.g. Soup"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  required
                />
              </label>

              <label htmlFor="prepTime">
                Preparation Time:
                <input
                  id="prepTime"
                  type="number"
                  name="prepTime"
                  value={prepTime}
                  placeholder="e.g. 90 minutes"
                  onChange={(e) => {
                    setPrepTime(e.target.value);
                  }}
                  required
                />
              </label>

              <label htmlFor="serving">
                Servings:
                <input
                  id="serving"
                  type="number"
                  name="serving"
                  value={serving}
                  placeholder="e.g. 6 persons"
                  onChange={(e) => {
                    setServing(e.target.value);
                  }}
                  required
                />
              </label>

              <label htmlFor="calories">
                Calories:
                <input
                  id="calories"
                  type="number"
                  name="calories"
                  value={calories}
                  placeholder="e.g. 300 kcal"
                  onChange={(e) => {
                    setCalories(e.target.value);
                  }}
                />
              </label>

              <label htmlFor="description">
                Description:
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-column right-column">
            <div className="ingredients-panel">
              <h3>Ingredients</h3>
              <div className="ingredient-fields">
                <input
                  id="ingredientName"
                  type="text"
                  name="ingredients"
                  value={ingredientName}
                  placeholder="e.g. Potatoes"
                  onChange={(e) => setIngredientName(e.target.value)}
                />
                <input
                  id="ingredientQuantity"
                  type="text"
                  name="ingredientQuantity"
                  value={ingredientQuantity}
                  placeholder="e.g. 500g"
                  onChange={(e) => setIngredientQuantity(e.target.value)}
                />
              </div>
              <button type="button" onClick={addIngredient}>
                Add Ingredient
              </button>

              <table className="ingredients-table">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((ing, idx) => (
                    <tr key={idx}>
                      <td>{ing.name}</td>
                      <td>{ing.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="steps-panel">
              <h3>Steps</h3>

              <div className="steps-fields">
                <input
                  id="instructions"
                  type="text"
                  name="instructions"
                  value={instructionStep}
                  placeholder="Enter instruction step"
                  onChange={(e) => setInstructionStep(e.target.value)}
                />
                <button type="button" onClick={addInstruction}>
                  Add Step
                </button>
              </div>

              <ul className="steps-list">
                {instructions.map((step, idx) => (
                  <li key={idx}>
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-text">{step}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tags-panel">
              <h3>Tags</h3>
              <div className="tags-fields">
                <input
                  id="tags"
                  type="text"
                  name="tags"
                  value={tagElm}
                  placeholder="Enter tag"
                  onChange={(e) => {
                    setTagElm(e.target.value);
                  }}
                />
                <button type="button" onClick={addTag}>
                  Add Tag
                </button>
              </div>
              <Tags tags={tags} />
            </div>
          </div>
          <button id="create-btn">Create</button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
