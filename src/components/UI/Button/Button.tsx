import React from "react";
import { ButtonProps } from "./types";

const button = (props: ButtonProps) => {
  return (
    <button
      className={
        "py-2 px-4 my-2 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 " +
        props.btnType
      }
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
