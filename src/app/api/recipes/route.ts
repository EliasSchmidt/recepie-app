import { RecipeType } from "@/lib/types";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const recipe = (await req.json()) as RecipeType; 


    await sql`INSERT INTO recipes (name, description, content, reel, image) VALUES (${recipe.name}, ${recipe.description}, ${recipe.content}, ${recipe.reelLink}, ${recipe.imageLink})`;

    return NextResponse.json({ success: true });
}