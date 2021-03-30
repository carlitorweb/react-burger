import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import {
  Controls,
  ControlsLabel,
  ControlsType,
  BuildControlsProps,
} from "./types";
import "./BuildControl.css";


const controls: Controls = [
  { label: ControlsLabel.salad, type: ControlsType.salad },
  { label: ControlsLabel.bacon, type: ControlsType.bacon },
  { label: ControlsLabel.cheese, type: ControlsType.cheese },
  { label: ControlsLabel.meat, type: ControlsType.meat },
];

const buildControls = (props: BuildControlsProps) => {
  return (
    <div className="w-full bg-yellow-800 flex flex-col text-center shadow-md ring-offset-gray-400 m-auto py-3">
      <p className="my-6 font-extrabold">
        Current price: {props.price.toFixed(2)}
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemove(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        disabled={!props.purchaseable}
        onClick={props.ordered}
        className="OrderButton w-72 bg-yellow-400 hover:bg-green-500 active:bg-green-700 disabled:bg-yellow-800 disabled:cursor-not-allowed outline-none focus:outline-none font-sans mx-1 py-2 px-4 font-semibold shadow-md border cursor-pointer ml-auto mr-auto mt-7 text-yellow-900 hover:text-white"
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
