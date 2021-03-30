import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className="m-0 p-0 list-none flex flex-col sm:flex-row items-center h-full">
      <NavigationItem link="/" active={true}>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/" active={false}>
        Checkout
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
