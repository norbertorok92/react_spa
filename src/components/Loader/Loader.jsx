import React from "react";
import { Spin } from "antd";

import "./style.scss";

export const Loader = () => (
  <div className="Loader">
    <Spin size="large" />
  </div>
);
