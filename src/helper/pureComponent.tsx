import React from "react";
import getElement from "./getElement";
import getChildren from "./getChildren";
import getAction from "../action/getAction";
type Component = {
  component: any;
  props: any;
  children: Array<Component | string>;
};
type Context = {
  componentContext: Array<Component>;
};

export default function propsComponent(props: Context) {
  let { componentContext } = props;
  return (
    <React.Fragment>
      {componentContext.map((items, key) => {
        let { component, props, children } = items;
        return (
          <React.Fragment key={key}>
            {React.createElement(
              getElement(component),
              { ...props, onPress: () => getAction(props.onPress) },
              getChildren(children)
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
