import React from "react";
import * as ReactElem from "react-native";
export default function getElement(el: string): React.ReactElement<string> {
  return ReactElem[el];
}
