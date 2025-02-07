import { getRecipeById, getRecipes } from "@/lib/comms";
import Image from "next/image"


export const dynamicParams = false;

export async function generateStaticParams() {
    console.log('recipes[id]: getStaticProps');
    const recipes = await getRecipes();
  
    return recipes.map((recipe) => ( {
      id: String(recipe.id)  
    }));
}

export default async function Page({params}: {params: Promise<{id: string}>}) {

    const id = (await params).id
   const recipe = await getRecipeById(Number(id));
    return (
        <div>
            <Image
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="image"
                width={400}
                height={200}
            />
            {recipe.description}
            <label>
                <input type="checkbox" className="mr-2" />
                Zutat 1
            </label>
            <p>{recipe.content}</p>
        </div>
    );
}