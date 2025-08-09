import React from 'react'
import { recipe } from '@/components/RecipeCardDetail'

type RecipeDetailParams = {
  id: string;
};

export default function RecipeDetail({params}:{params:RecipeDetailParams}) {
  
    const getItem = recipe.find((item)=>{
       return item.id===parseInt(params.id)
    })
    
    
  return (
    <div>
        <h1>Recipe details</h1>
        <h2>{getItem?.title}</h2>
    </div>
  )
}
