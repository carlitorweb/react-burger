import React from "react";
import "./burgerIngredient.css";

const burgerIngredient = (props: { [k in string]: string }) => {
  let ingredient = null;
  const igrType: { [k in string]: string } = {
    salad: "salad",
    bacon: "bacon",
    cheese: "cheese",
    meat: "meat",
  };

  switch (props.type) {
    case "bread-bottom":
      ingredient = (
        <div className="h-1/8 w-4/5 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 rounded-br-3xl rounded-bl-3xl shadow-inner2 m-1/45auto"></div>
      );
      break;

    case "bread-top":
      ingredient = (
        <div className="h-1/5 w-4/5 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-600 rounded-tl-1/2 rounded-tr-1/2 shadow-inner2 m-1/45auto relative">
          <div className="Seeds1 w-1/10 h-1/6 absolute bg-white left-1/3 top-1/2 rounded-2/5 transform -rotate-20 shadow-inner3"></div>
          <div className="Seeds2 w-1/10 h-1/6 absolute bg-white left-2/3 top-1/2 rounded-2/5 transform rotate-10 shadow-inner4"></div>
        </div>
      );
      break;

    case igrType.meat:
      ingredient = (
        <div className="w-4/5 h-1/12 bg-gradient-to-r from-yellow-800 to-yellow-900 m-1/45auto rounded-2xl"></div>
      );
      break;

    case igrType.cheese:
      ingredient = (
        <div className="w-9/10 h-1/22 m-1/45auto rounded-2xl bg-gradient-to-r from-cheese-dark to-cheese-light"></div>
      );
      break;

    case igrType.salad:
      ingredient = (
        <div className="w-4/5 h-1/14 m-1/45auto rounded-2xl bg-gradient-to-r from-green-600 to-green-500"></div>
      );
      break;

    case igrType.bacon:
      ingredient = (
        <div className="w-4/5 h-1/30 m-1/45auto bg-gradient-to-r from-red-800 to-red-500 rounded-md"></div>
      );
      break;

    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

export default burgerIngredient;
