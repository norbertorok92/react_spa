import React from "react";
import { Layout as AntDLayout } from "antd";
import { Header } from "../Header/Header";
import { FloatingButton } from "../FloatingButton/FloatingButton";

import "./style.scss";

export const Layout = ({ children }) => {
  const { Content } = AntDLayout;

  return (
    <AntDLayout>
      <Header />
      <Content className="Layout">
        <div className="Layout__background">{children}</div>
        <FloatingButton />
      </Content>
    </AntDLayout>
  );
};
