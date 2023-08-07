import React from "react";
import "./Switch.scss";

function Switch() {
  return (
    <label class="toggle-switch">
      <input type="checkbox" />
      <span class="slider"></span>
    </label>
  );
}

export default Switch;
