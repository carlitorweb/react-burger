import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Ingredients } from "./type";

const burger = (props: Ingredients) => {
  let transformedIngredients = Object.entries(props)
    .map((key, i) => {
      return [...Array(key[1])].map((_, j) => (
        <BurgerIngredient key={key[0] + j} type={key[0]} />
      ));
    })
    .reduce((previousValue, currentValue) => {
      return previousValue.concat(currentValue);
    }, []);

  if (transformedIngredients.length === 0) {
    return (
      <div className="w-72 h-36 transition-height duration-700 ease-out m-auto text-center font-bold text-xl sm:w-96 sm:h-64 md:w-150 md:h-120">

        <BurgerIngredient type="bread-top" />
        <p>Please start adding ingredients!</p>
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  } else {
    return (
      <div className="w-72 h-64 transition-height duration-700 ease-out m-auto text-center font-bold text-xl sm:w-96 sm:h-64 md:w-150 md:h-120">
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
};

export default burger;
