import { recipes, type Recipe } from './recipeData';

type RecipeProps = {
  recipeProps: Recipe
}

const Recipe = ({ recipeProps }: RecipeProps) => {
  const { id, name, ingredients } = recipeProps;

  return (
    <>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => {
          return (
            <li>{ingredient}</li>
          );
        })}
      </ul>
    </>
  )
}

export default function RecipeList() {
  const receipeLiList = recipes.map((recipe: Recipe) => {
    return(
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => {
            return (
              <li>{ingredient}</li>
            );
          })}
        </ul>
      </div>
    );
  });

  const recipeComponentList = recipes.map((recipe: Recipe) => {
    return (
      <Recipe recipeProps={recipe} key={recipe.id} />
    );
  });

  return (
    <div>
      <h1>Recipes</h1>
      {recipeComponentList}
    </div>
  );
}
