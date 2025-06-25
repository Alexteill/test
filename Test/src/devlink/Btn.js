"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Btn.module.css";

export function Btn({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  text = "Button Text",
  visibilityIcon = false,
  buttonTest = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      id={_utils.cx(
        _styles,
        "w-node-_63fa98f1-e475-e187-e022-24116e8ee36a-6e8ee36a"
      )}
      button={false}
      block="inline"
      options={link}
      {...buttonTest}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
      {visibilityIcon ? (
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "icon-1x1-small")}
          value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D%22currentColor%22%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
        />
      ) : null}
    </_Component>
  );
}
