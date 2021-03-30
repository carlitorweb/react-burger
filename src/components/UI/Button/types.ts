import React from "react";

export interface ButtonProps {
  btnType: string;
  clicked: () => void;
  children: React.ReactNode;
}
