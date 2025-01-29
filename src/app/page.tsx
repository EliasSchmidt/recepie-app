import RecipeCard from "./ui/recepeCard";

export default function Home() {
  const recipes = [] 
  for(let i = 0; i < 20; i++){
    recipes.push(
    <li key={i} className={i === 20 ? "": "pb-4"}>
      <RecipeCard />
    </li>);
    }
  return <ul>{recipes}</ul>
}
