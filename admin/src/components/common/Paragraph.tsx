import React from "react";

interface IProps {
  name: string;
  text: string | undefined;
  textColor?: string | undefined;
}

const Paragraph = (props: IProps) => {
  return (
    <div className="w-full h-full">
      <h4 className="text-white">{props.name}</h4>
      <div
        className={`py-2 px-4 bg-[#2b2b31] rounded-md ${
          props.textColor ? props.textColor : "text-gray-400"
        } `}
      >
        {props.text ? props.text : "None"}
      </div>
    </div>
  );
};

export default Paragraph;
