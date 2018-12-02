import React from "react";

export const ButtonInline = ({ onClick, type = "button", children }) => (
  <button type={type} className="button-inline" onClick={onClick}>
    {children}
  </button>
);

const Button = ({ onClick, type = "button", className, children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
