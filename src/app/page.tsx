import { sql } from "@vercel/postgres";
import RecipeCard from "./ui/recipeCard";
import {RecipeType} from "@/lib/types";



export default async function Home() {

  const recipes = (await sql`SELECT * FROM recipes`).rows as RecipeType[];
  return (
    <ul>
      {recipes.map((recipe) =>(
          <li key={recipe.id} className="pb-4">
            <RecipeCard recipeData={recipe}/>
          </li>
      ))}
    </ul>
  );
}
