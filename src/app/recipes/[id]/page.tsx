import { getRecipeById, getRecipeOverwievs} from "@/lib/comms";
import Image from "next/image"


// TODO: Add Imag from uploadthing
// TODO: Style page

export const dynamicParams = false;

export async function generateStaticParams() {
    console.log('recipes[id]: getStaticProps');
    const recipes = await getRecipeOverwievs();
  
    return recipes.map((recipe) => ( {
      id:`${recipe.id}`  
    }));
}

export default async function Page({params}: {params: Promise<{id: string}>}) {
   const id = (await params).id;
   const recipe = await getRecipeById(Number(id));

   const ingredientsBlock = [];   
   for(const ingredient of recipe.ingredients){
    ingredientsBlock.push(
        <p>
            <label>
                <input type="checkbox" className="mr-2" />
                {ingredient.name}
            </label>
        </p>
    )
   }

   const tagsBlock = [];
   for(const tag of recipe.tags){
    tagsBlock.push(<div>
        <div className="bg-white br-15">
            {tag.name}
        </div>
    </div>)
   }


    return (
        <div>
            <Image
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="image"
                width={400}
                height={200}
            />
            {...tagsBlock}
            {recipe.description}
            {...ingredientsBlock}
            <p>{recipe.content}</p>
            <p>{recipe.reelLink}</p>
        </div>
    );
}