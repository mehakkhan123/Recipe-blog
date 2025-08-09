export interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    cuisine: string;
    difficulty: string;
    time: string;
    totalTime: string;
    servings: string;
    ingredients: string[];
    instructions: string[]
}