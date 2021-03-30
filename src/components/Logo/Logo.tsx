import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import { LogoProps } from "./types";

const logo = (props: LogoProps) => {
  let classCssNames =
    "bg-white p-2 box-border rounded-md " + props.logoContainerCss;
  return (
    <div className={classCssNames}>
      <img className={props.logoCss} src={burgerLogo} alt="Builder Burger" />
    </div>
  );
};

export default logo;
