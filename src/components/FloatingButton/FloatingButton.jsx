import React from "react";
import { Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

import "./style.scss";

export const FloatingButton = () => {
  const { pathname } = useLocation();

  if (pathname === "/create") return null;

  return (
    <div className="FloatingButton">
      <Button
        type="primary"
        shape="round"
        icon={<UserAddOutlined />}
        href="/create"
      >
        Add
      </Button>
    </div>
  );
};
