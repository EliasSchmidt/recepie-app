import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache"; // Built-in Next.js revalidation

export async function POST(req: Request) {
    try {
        const { path } = await req.json(); // Get the path to revalidate

        if (!path) {
            return NextResponse.json({ success: false, error: "Path is required" }, { status: 400 });
        }

        revalidatePath(path); // Tell Next.js to regenerate this page
        console.log(`🔄 Revalidating ${path}`);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Revalidation error:", error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
