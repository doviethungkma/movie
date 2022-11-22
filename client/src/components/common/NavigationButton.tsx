import React from "react";

interface INavigationButtonProp {
  children?: React.ReactNode;
  className?: string;
}

const NavigationButton = (props: INavigationButtonProp) => {
  return (
    <div
      className={`${props.className} w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer z-10`}
    >
      {props.children}
    </div>
  );
};

export default NavigationButton;
