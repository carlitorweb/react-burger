import React from "react";
import Aux from "../Auxiliar/auxiliar";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";
import { LayoutProps, LayoutState } from "./types";

class Layout extends React.Component<LayoutProps, LayoutState> {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar showHiddenSidedrawer={this.sideDrawerClosedHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="mt-20">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
