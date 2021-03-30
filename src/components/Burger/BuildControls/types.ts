export enum ControlsLabel {
  salad = "Salad",
  bacon = "Bacon",
  cheese = "Cheese",
  meat = "Meat",
}

export enum ControlsType {
  salad = "salad",
  bacon = "bacon",
  cheese = "cheese",
  meat = "meat",
}

export type Controls = [
  { [k in string]: string },
  { [k in string]: string },
  { [k in string]: string },
  { [k in string]: string }
];

export interface BuildControlsProps {
  ingredientAdded: (type: string) => void;
  ingredientRemove: (type: string) => void;
  disabled: { [k in string]: number | boolean };
  purchaseable: boolean;
  price: number;
  ordered: () => void;
}
