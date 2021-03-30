export type BurgerBuilderProps = {};

export type BurgerBuilderState = {
  ingredients: { [k in string]: number };
  totalPrice: number;
  purchaseable: boolean;
  purchasing: boolean;
};
