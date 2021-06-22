import React, { useEffect } from "react";
import { Checkbox } from "../common/Checkbox";

export const Header = ({ check, changeTheme, changeType }) => {
  useEffect(() => {
    console.log("update header");
  }, [changeType]);

  return (
    <header className="blog-header">
      <div className="layout layout-header">
        <div className="blog-logo">
          <a href="/">IT Блог</a>
        </div>
        <div className="tabs">
          <button onClick={() => changeType("posts")}>Posts</button>
          <button onClick={() => changeType("users")}>Users</button>
        </div>
        <Checkbox checked={check} changeTheme={changeTheme} />
      </div>
    </header>
  );
};
