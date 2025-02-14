import { getIngredients, getTags } from "@/lib/comms"
import NewRecipeForm from "../ui/newRecipeForm";

export default async function Page() {
    //fetches
    const tags = await getTags();
    const ingredients = await getIngredients();
    return (
        <NewRecipeForm tags={tags} ingredients={ingredients} />
    );
}