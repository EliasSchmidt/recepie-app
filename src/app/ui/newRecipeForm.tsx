'use client';

import { IngredientType, RecipeType, TagType } from "@/lib/types";
import { useState } from "react";


export default function NewRecipeForm({ tags, ingredients }: { tags: TagType[], ingredients: IngredientType[] }) {
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const name = formData.get("name")?.toString().trim();
        const description = formData.get("description")?.toString().trim();
        const content = formData.get("content")?.toString().trim();


        if (!name || !description || !content) {
            setMessage("all fields are required!");
            return;
        }

        const recipe: RecipeType = {
          name,
          description,
          content,
          tags: [],
          ingredients: [],
        };

        const result = await fetch("/api/recipes", {
            method: "POST",
            body: JSON.stringify(recipe),
        });

        if (result.ok) {
            setMessage("Recipe created successfully!");

            if (form) {
                form.reset();
            }

            await fetch("/api/revalitate?path=/recipes", { method: "POST" });
        } else {
            setMessage("Failed to create Recipe.");
        }
    }

    type Element = {key: number; name: string};

    function list(elements: Element[]) {
        return elements.map(element => <li key={element.key}>{element.name}</li>)
    }


    //TODO: Add remaining fields
    //TODO: Image Upload with downscaling
    return (<div>
        <h1>Create Recipe</h1>
        <form onSubmit={handleSubmit}>
            <ul>{list(tags.map(tag => ({ key: tag.id, name: tag.name })))}</ul>
            <ul>{list(ingredients.map(tag => ({ key: tag.id, name: tag.name })))}</ul>
            <input className="text-black" name="name" placeholder="Recipe name" required />
            <textarea className="text-black" name="description" placeholder="Description" required />
            <textarea className="text-black" name="content" placeholder="content" required />
            <textarea className="text-black" name="reelLink" placeholder="link to a reel" />
            <textarea className="text-black" name="imageLink" placeholder="link to a image" />
            <button type="submit">Create</button>
        </form>
        {message && <p>{message}</p>}
    </div>);
}