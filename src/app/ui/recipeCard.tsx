import Image from 'next/image';
import Link from 'next/link';
import {RecipeType} from '@/lib/types';



export default function RecipeCard( {recipeData}: {recipeData: RecipeType}) {

    return (
        <div className="bg-white">
        <Link href="recipe">
            <Image
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                alt="image"
                width={400}
                height={200}
            />
            <div className="p-2">
                <p className="text-black">{recipeData.name}</p>
                <p className="text-gray-900 text-sm">{recipeData.description}</p>
            </div>
        </Link>
        </div>
    );
}