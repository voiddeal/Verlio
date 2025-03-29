export interface Country {
  name: string
  callingCodes: string[]
  flag: string
}

export interface CategoryList {
  meals: {
    strCategory: string
  }[]
}

export interface MealList {
  meals: Meal[]
}

export interface Meal {
  strMeal: string
  strMealThumb: string
  idMeal: string
}

export interface MealDetail {
  meals: [
    {
      idMeal: string
      strMeal: string
      strArea: string
      strYoutube: string
      strSource: string
      strIngredient1: string
      strIngredient2: string
      strIngredient3: string
      strIngredient4: string
      strIngredient5: string
      strIngredient6: string
      strIngredient7: string
      strIngredient8: string
      strIngredient9: string
      strIngredient10: string
      strIngredient11: string
      strIngredient12: string
      strIngredient13: string
      strIngredient14: string
      strIngredient15: string
      strIngredient16: string
      strIngredient17: string
      strIngredient18: string
      strIngredient19: string
      strIngredient20: string
    }
  ]
}
