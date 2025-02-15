import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim();
    const description = formData.get("description")?.toString().trim();
    const content = formData.get("content")?.toString().trim();
    const reelLink = formData.get("reelLink")?.toString().trim();
    const imageLink = formData.get("imageLink")?.toString().trim();


    await sql`INSERT INTO recipes (name, description, content, reel, image) VALUES (${name}, ${description}, ${content}, ${reelLink}, ${imageLink})`;

    return NextResponse.json({ success: true });
}