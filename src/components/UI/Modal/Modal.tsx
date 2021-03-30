import React from "react";
import { ModalProps } from "./types";
import Aux from "../../../hoc/Auxiliar/auxiliar";
import Backdrop from "../Backdrop/Backdrop";

let className = "";

const backdrop = (props: ModalProps) => {
  if (props.show) {
    className =
      "Modal fixed z-50 transition-all duration-700 ease-in-out transform translate-y-0 opacity-100 left-2.5 top-2.5 box-border";
  } else {
    className =
      "Modal fixed z-50  transition-all duration-700 ease-in-out transform -translate-y-full opacity-0 left-2.5 top-2.5 box-border";
  }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={className}>
        <div className="bg-white w-4/6 border border-gray-300 shadow-md p-4">
          {props.children}
        </div>
      </div>
    </Aux>
  );
};

export default React.memo(backdrop);
