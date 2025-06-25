import * as React from "react";
import * as Types from "./types";

declare function Btn(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  visibilityIcon?: Types.Visibility.VisibilityConditions;
  buttonTest?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
