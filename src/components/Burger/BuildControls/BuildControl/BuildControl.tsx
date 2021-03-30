import React from "react";
import BuildControlProps from "./type";

const buildControl = (props: BuildControlProps) => {
  return (
    <div className="flex flex-row justify-center text-center my-1 ">
      <div className="p-3 font-bold w-20 mr-8 uppercase">{props.label}</div>
      <button
        onClick={props.removed}
        disabled={props.disabled}
        className="block font-sans mx-1 py-1 px-10 font-semibold rounded-none shadow-md cursor-pointer border bg-gray-600 hover:bg-red-700 active:outline-none active:bg-red-500 focus:outline-none disabled:bg-yellow-800 disabled:cursor-not-allowed text-white outline-none"
      >
        Less
      </button>
      <button
        onClick={props.added}
        className="block font-sans mx-1 py-1 px-10 font-semibold rounded-none shadow-md border bg-yellow-600 hover:bg-yellow-700 active:outline-none active:bg-yellow-500 focus:outline-none text-white cursor-pointer outline-none"
      >
        More
      </button>
    </div>
  );
};

export default buildControl;
