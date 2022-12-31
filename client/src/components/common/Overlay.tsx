import React from "react";

interface IOverlayProps {
  onClick?: () => void;
}

const Overlay = (props: IOverlayProps) => {
  return (
    <div
      className="w-full h-full absolute top-0 left-0 bg-black opacity-70 z-40"
      onClick={props.onClick}
    ></div>
  );
};

export default Overlay;
