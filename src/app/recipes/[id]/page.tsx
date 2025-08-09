import React from 'react'
import { recipe } from '@/components/RecipeCardDetail'

interface RecipeDetailParams  {
  id: string;
};

export default async function RecipeDetail({params}:{params:RecipeDetailParams}) {
  const {id} = await params
  
    const getItem = recipe.find((item)=>{
       return item.id===parseInt(id)
    })
    
    
  return (
    <div>
        <h1>Recipe details</h1>
        <h2>{getItem?.title}</h2>
    </div>
  )
}
