import { sql } from "@vercel/postgres";
import { RecipeType } from "./types";

export async function getRecipes(): Promise<RecipeType[]> {
    console.log("fetch getRecipes");
    return (await sql`SELECT * FROM recipes`).rows as RecipeType[];
}

export async function getRecipeById(id: number): Promise<RecipeType>{
    console.log("fetch getRecipeByID")
    const recipes = (await sql`SELECT * FROM recipes WHERE Id = ${id};`).rows as RecipeType[]
    return recipes[0];
}