import React from "react";

interface IOverlayProps {
  onClick?: () => void;
}

const Overlay = (props: IOverlayProps) => {
  return (
    <div
      className="w-full h-full absolut top-0 left-0 bg-black opacity-70 -z-10"
      onClick={props.onClick}
    ></div>
  );
};

export default Overlay;
