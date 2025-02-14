import { getIngredients, getTags } from "@/lib/comms"
import NewRecipeForm from "../ui/newRecipeForm";

export async function Page({params}: {params: Promise<{id: string}>}) {
    //fetches
    const tags = await getTags();
    const ingredients = await getIngredients();
    return (
        <NewRecipeForm tags={tags} ingredients={ingredients} />
    );
}