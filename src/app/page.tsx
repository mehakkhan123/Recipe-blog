import Hero from "../components/Hero";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero/>
      <RecipeCard/>
      
    </div>
  );
}
