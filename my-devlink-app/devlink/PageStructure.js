"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";
import { Navbar } from "./Navbar";
import * as _utils from "./utils";
import _styles from "./PageStructure.module.css";

export function PageStructure({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "page-wrapper")} tag="div">
      <GlobalStyles />
      <Navbar />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="main">
        <_Builtin.Block tag="section">
          <_Builtin.Block
            className={_utils.cx(_styles, "padding-global")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "container-large")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "padding-section-large")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
