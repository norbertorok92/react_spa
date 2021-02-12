import React, { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { Layout, Button } from "antd";

import "./style.scss";

export const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { Header } = Layout;

  const onBack = useCallback(() => {
    history.push("/");
  }, [history]);

  const getHeader = useCallback(() => {
    if (pathname.includes("edit")) {
      return "Users - Edit user";
    }

    if (pathname.includes("create")) {
      return "Users - Create new user";
    }

    if (pathname.includes("profile")) {
      return (
        <Button type="primary" onClick={onBack}>
          Back
        </Button>
      );
    }

    return "Users";
  }, [pathname, onBack]);

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="Header">{getHeader()}</div>
    </Header>
  );
};
