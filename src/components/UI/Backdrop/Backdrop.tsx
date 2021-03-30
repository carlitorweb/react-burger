import React from "react";

const backdrop = (props: { show: boolean; clicked: () => void }) => {
  return props.show ? (
    <div
      className="w-full h-full fixed z-20 left-0 top-0 bg-black opacity-50"
      onClick={props.clicked}
    ></div>
  ) : null;
};

export default backdrop;
