import { IngredientType, TagType } from "@/lib/types";
import { useState } from "react";

export default function NewRecipeForm({ tags, ingredients }: { tags: TagType[], ingredients: IngredientType[] }) {
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.FocusEvent<HTMLFormElement>) {
        event.preventDefault

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name")?.toString().trim();
        const description = formData.get("description")?.toString().trim();

        if (!name || !description) {
            setMessage("all fields are requierd!");
            return;
        }

        const result = await fetch("/api/recipes", {
            method: "POST",
            body: formData,
        });

        if (result.ok) {
            setMessage("Recipe created successfully!");
            event.currentTarget.reset();

            //trigger ISR TODO: Understand and rebuild all relevant pages
            await fetch("/api/revalitate?path=/recipes", { method: "POST" });
        } else {
            setMessage("Failed to create Recipe.");
        }
    }


    //TODO: Add remaining fields
    //TODO: Image Upload with downscaling
    return (<div>
        <h1>Create Recipe</h1>
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Recipe name" required />
            <textarea name="description" placeholder="Description" required />
            <button type="submit">Create</button>
        </form>
        {message && <p>{message}</p>}
    </div>);
}