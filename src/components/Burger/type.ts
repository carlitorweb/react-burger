// https://basarat.gitbook.io/typescript/type-system/index-signatures

// export type IngredientsIndex = "salad" | "bacon" | "cheese" | "meat";
export type Ingredients = { [k in string]: number };

/*export type Ingredients =
  {salad: number | boolean } &
  {bacon: number | boolean } &
  {cheese: number | boolean } &
  {meat: number | boolean }*/
