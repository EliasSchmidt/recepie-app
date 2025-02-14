import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;


    const result = await sql`INSERT INTO recipes (name, description) VALUES ('${name}', '${description}', '${content}')`;
    return NextResponse.json({ success: true });
}