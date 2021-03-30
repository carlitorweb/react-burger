import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import { ToolbarProps } from "./types";

const toolbar = (props: ToolbarProps) => {
  return (
    <header className="h-14 w-full fixed top-0 left-0 px-5 bg-toolbar flex justify-between items-center box-border z-10">
      <DrawerToggle toggle={props.showHiddenSidedrawer} />
      <Logo logoCss="h-full" logoContainerCss="h-4/5" />

      <nav className="h-full desktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
