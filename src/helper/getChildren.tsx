import React from "react";
import * as ReactChild from "react-native";
import pureComponent from "./pureComponent";
import getElement from "./getElement";

type Component = {
  component: any;
  props: any;
  children: Array<Component>;
};
export default function getChildren(child: Array<Component>) {
  if (child && child.length === 1 && typeof child[0] === "string") {
    return <ReactChild.Text>{child[0]}</ReactChild.Text>;
  } else if (child && child.length > 1) {
    return pureComponent({ componentContext: child });
  } else {
    let { component, props, children } = child[0];
    return React.createElement(getElement(component), { ...props }, children);
  }
}
