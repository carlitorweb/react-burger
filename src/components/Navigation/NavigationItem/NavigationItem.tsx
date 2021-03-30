import React from "react";
import { navigationItemprops } from "./types";

const navigationItem = (props: navigationItemprops) => {
  let className = "";
  if (props.active) {
    className =
      "text-blue-500 w-full block no-underline active:text-blue-500 hover:text-blue-500 sm:text-white sm:w-auto sm:h-full sm:bg-navigationLink sm:py-4 sm:px-3 sm:border-b-4 sm:border-blue-500 sm:flex sm:hover:bg-navigationLink sm:hover:border-blue-500 sm:active:bg-navigationLink sm:active:border-navigationLink";
  } else {
    className =
      "text-navigationLink w-full block no-underline active:text-blue-500 hover:text-blue-500 sm:text-white sm:w-auto sm:h-full sm:py-4 sm:px-3 sm:border-b-4 sm:border-transparent sm:flex sm:hover:bg-navigationLink sm:hover:border-blue-500 sm:active:bg-navigationLink sm:active:border-navigationLink";
  }

  return (
    <li className="my-3 mx-0 block w-full box-border sm:m-0 sm:flex sm:items-center sm:h-full sm:w-auto">
      <a href={props.link} className={className}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
