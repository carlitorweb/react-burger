import React from "react";
import Aux from "../../hoc/Auxiliar/auxiliar";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = (props: LayoutProps) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>

    <main className="mt-7">{props.children}</main>
  </Aux>
);

export default layout;
