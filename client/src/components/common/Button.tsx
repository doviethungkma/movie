import React from "react";
import "../../index.css";

interface IButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  bg?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
  hover?: string;
  onClick?: any;
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className={`${props.width} ${props.height} ${props.bg} ${props.color} ${props.border} ${props.borderRadius} ${props.hover} flex items-center justify-center`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
