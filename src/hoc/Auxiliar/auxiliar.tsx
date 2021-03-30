import React from "react";

interface AuxProps {
  children: React.ReactNode;
}

const aux = (props: AuxProps) => <>{props.children}</>;

export default aux;
