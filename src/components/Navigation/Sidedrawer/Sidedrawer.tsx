import React from "react";
import Aux from "../../../hoc/Auxiliar/auxiliar";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import { SidedrawerProps } from "./types";

const sidedrawer = (props: SidedrawerProps) => {
  const commonSidedrawer =
    "fixed w-72 max-w-3/4 h-full z-30 top-0 bg-white py-8 px-4 box-border transition-transform ease-out duration-700 sm:hidden";
  const openSidedrawer = "transform  translate-x-0 translate-y-0";
  const closeSidedrawer = "transform  -translate-x-full";
  let attachedClasses = [commonSidedrawer, closeSidedrawer];

  if (props.open) {
    attachedClasses = [commonSidedrawer, openSidedrawer];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo logoCss="h-full mx-auto" logoContainerCss="h-1/8 mb-10" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sidedrawer;
