import React from "react";
import { Link } from "react-router-dom";
import c from "./navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={c.navigation}>
      <div className={c.container}>Cherie Articles</div>
    </nav>
  );
};

export default Navigation;
