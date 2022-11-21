import React from "react";

interface IProps {
  name: string;
  color?: string;
  title?: string;
  px?: number;
  py?: number;
  width?: string;
  height?: string;
  onClick?: any; //temp
}

const Button = (props: IProps) => {
  return (
    <button
      title={props.title}
      className={`px-${props.px} py-${props.py} ${props.color} ${props.width} ${props.height} rounded-md text-white`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
