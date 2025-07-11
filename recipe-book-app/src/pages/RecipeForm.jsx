import { useState } from "react";

function RecipeForm(props) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [serving, setServing] = useState("");
  const [calories, setCalories] = useState({});

  const [tags, setTags] = useState([]);
  const [tagElm, setTagElm] = useState("");

  const [instructions, setInstructions] = useState([]);
  const [instructionStep, setInstructionStep] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");

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
      serving: serving,
      ingredients: ingredients,
      instructions: instructions,
      tags: tags,
      // nutrition: nutrition,
    };

    props.onCreate(newRecipe);
  };

  return (
    <div>
      <h2>Create new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            placeholder="enter the title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
        </label>
        <br />
        <label htmlFor="difficulty">
          Difficulty:
          <input
            id="difficulty"
            type="text"
            name="difficulty"
            value={difficulty}
            placeholder="enter the difficulty"
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
            required
          />
        </label>
        <br />
        <label htmlFor="category">
          Category:
          <input
            id="category"
            type="text"
            name="category"
            value={category}
            placeholder="enter the category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            required
          />
        </label>
        <br />
        <label htmlFor="prepTime">
          Preparation Time:
          <input
            id="prepTime"
            type="number"
            name="prepTime"
            value={prepTime}
            placeholder="enter the time to prepare"
            onChange={(e) => {
              setPrepTime(e.target.value);
            }}
            required
          />
        </label>
        <br />
        <label htmlFor="serving">
          Servings:
          <input
            id="serving"
            type="number"
            name="serving"
            value={serving}
            placeholder="enter the servings"
            onChange={(e) => {
              setServing(e.target.value);
            }}
            required
          />
        </label>
        <br />
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
            <img src={image} alt="preview" style={{ maxWidth: "200px" }} />
          </div>
        )}
        <br />
        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </label>
        <br />
        <label htmlFor="ingredientName">
          Ingredient Name:
          <input
            id="ingredientName"
            type="text"
            name="ingredients"
            value={ingredientName}
            placeholder="enter the ingredient name"
            onChange={(e) => {
              setIngredientName(e.target.value);
            }}
          />
        </label>
        <label>
          Quantity:
          <input
            id="ingredientQuantity"
            type="text"
            name="ingredientQuantity"
            value={ingredientQuantity}
            placeholder="enter the quantity"
            onChange={(e) => {
              setIngredientQuantity(e.target.value);
            }}
          />
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </label>
        {/* List added ingredients */}
        <ul>
          {ingredients.map((ing, idx) => (
            <li key={idx}>
              {ing.name} - {ing.quantity}
            </li>
          ))}
        </ul>
        <br />
        <label htmlFor="instructions">
          Instructions:
          <input
            id="instructions"
            type="text"
            name="instructions"
            value={instructionStep}
            placeholder="enter isntruction"
            onChange={(e) => {
              setInstructionStep(e.target.value);
            }}
          />
          <button type="button" onClick={addInstruction}>
            Add Instruction
          </button>
        </label>
        <ol className="text-sm text-gray-700 list-decimal pl-5">
          {instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
        <br />
        <label htmlFor="calories">
          Calories:
          <input
            id="calories"
            type="number"
            name="calories"
            value={calories}
            placeholder="enter calories"
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>
        <br />

        <label htmlFor="tags">
          Tags:
          <input
            id="tags"
            type="text"
            name="tags"
            value={tagElm}
            placeholder="enter new tag"
            onChange={(e) => {
              setTagElm(e.target.value);
            }}
          />
          <button type="button" onClick={addTag}>
            Add Tag
          </button>
        </label>
        <ul className="text-sm text-gray-700 list-decimal pl-5">
          {tags.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
        <br />
        <button>Create</button>
      </form>
    </div>
  );
}

export default RecipeForm;
