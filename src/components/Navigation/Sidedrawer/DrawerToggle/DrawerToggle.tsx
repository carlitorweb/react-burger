import React from "react";
import { DrawerToggleProps } from "./types";

const drawerToggle = (props: DrawerToggleProps) => {
  return (
    <div
      className="sm:hidden w-10 h-full flex flex-col justify-around items-center py-3 px-0 box-border cursor-pointer"
      onClick={props.toggle}
    >
      <div className="w-full h-1 bg-white"> </div>
      <div className="w-full h-1 bg-white"> </div>
      <div className="w-full h-1 bg-white"> </div>
    </div>
  );
};

export default drawerToggle;
