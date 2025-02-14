import { sql } from "@vercel/postgres";
import { IngredientType, RecipeOverviewType, RecipeType, TagType } from "./types";
import { cache } from "react";


export const getTags = cache(async () => {
    return (await sql`  SELECT id name
                        FROM tags;`
            ).rows as TagType[];
});

export const getTagsByRecipeId = cache(async (id: number) => {
    return (await sql`  SELECT t.id, t.name
                        FROM recipe_tags rt
                        LEFT JOIN tags t ON rt.tag_id=t.id
                        WHERE rt.recipe_id = ${id};`
            ).rows as TagType[];        
});

export const getRecipeOverwievs = cache(async () => {
    console.log("fetch getRecipes");
    return (await sql`SELECT * FROM recipes`).rows as RecipeOverviewType[];
});

export const getIngredients = cache(async () => {
    console.log("fetch getIngredients");
    return (await sql`SELECT * FROM ingredients`).rows as IngredientType[];
})

const getIngredientsByRecipeId = cache (async (id: number) => {
    console.log("fetchIngredientsByRecipeId");
    return (await sql`  SELECT i.id, i.name
                        FROM recipe_ingredients ri
                        LEFT JOIN ingredients i ON ri.ingredient_id=i.id
                        WHERE ri.recipe_id = ${id};`
            ).rows as IngredientType[];
});

export const getRecipeById = cache(async (id: number) => {
    console.log("fetch getRecipeByID");
    const recipes = (await sql`SELECT * FROM recipes WHERE Id = ${id};`).rows as RecipeType[];
    const recipe = recipes[0];
    recipe.ingredients = await getIngredientsByRecipeId(id);
    recipe.tags = await getTagsByRecipeId(id);
    return recipes[0];
});