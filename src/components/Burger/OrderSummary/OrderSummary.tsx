import React from "react";
import Aux from "../../../hoc/Auxiliar/auxiliar";
import OrderSummaryProps from "./types";
import Button from "../../UI/Button/Button";

const orderSummary = (props: OrderSummaryProps) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span className="capitalize text-sm">{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h2 className="text-black text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
        Your Order
      </h2>
      <p className="mt-4 text-sm">
        A delicious burger with the following ingredients:
      </p>
      <ul className="mt-4">{ingredientSummary}</ul>
      <p className="border-t border-gray-700 my-2">
        <strong>${props.totalCost.toFixed(2)}</strong>
      </p>
      <p className="mt-4 font-semibold text-sm">Continue to checkout?</p>
      <Button
        btnType="bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200"
        clicked={props.confirm}
      >
        CONTINUE
      </Button>
      <Button
        btnType="bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200"
        clicked={props.cancel}
      >
        CANCEL
      </Button>
    </Aux>
  );
};

export default orderSummary;
