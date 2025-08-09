import React from 'react'
import { recipe } from '@/components/RecipeCardDetail'
import { Recipe } from '@/components/recipeInterface'

export default function RecipeDetail({params}:any) {
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
