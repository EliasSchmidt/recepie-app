export type TagType = {
  id: number,
  name: string,
}

export type RecipeOverviewType = {
  id?: number,
  name: string,
  description: string,
  imageLink?: string,
  tags: TagType[],
}

export type IngredientType = {
  id: number,
  name: string,
}

export type RecipeType = RecipeOverviewType & {
    content: string,
    reelLink?: string,
    ingredients: IngredientType[],
};