import React, { Fragment, PropsWithChildren, ReactNode } from "react";
import "./global-style.scss";

export function GlobalStyle(props: PropsWithChildren) {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
}
