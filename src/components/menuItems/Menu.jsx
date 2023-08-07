import React from "react";

import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../assets/AppsData";


function Menu() {
  return (
    <div className="menu border px-3">
      {menuItems.map((item, idx) => (
        <div className="menu__items" key={idx}>
          <NavLink
            to={`../${item.name.toLowerCase()}`}
            className=" link  d-flex align-items-center py-2 px-3"
            key={item.id}
            style={{ outline: "none", color: item.color }}
          >
            <span className="menu__icon pe-4 fs-4" >{item.icon}</span>
            <span className="menu__name ">{item.name}</span>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Menu;
